import { connect, connection, Connection, Mongoose } from "mongoose";

interface IConnectionState {
    isConnected: number | boolean;
    db: Mongoose | null;
}

const conn: IConnectionState = {
    isConnected: false,
    db: null,
};

export async function connectDB() {
    if (conn.isConnected) {
        console.log("Using existing database connection");
        return conn.db;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error(
            "MONGODB_URI no está definida en las variables de entorno"
        );
    }

    try {
        const db = await connect(process.env.MONGODB_URI);
        conn.isConnected = db.connections[0].readyState;
        conn.db = db;

        const databaseName = db.connection?.db?.databaseName;
        console.log("Nombre Base de Datos:", databaseName ?? "Unknown DB");


        return db;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw new Error("Error al conectar a la base de datos");
    }
}

connection.on("connected", () => {
    console.log("Mongoose connection established");
});

connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
});
