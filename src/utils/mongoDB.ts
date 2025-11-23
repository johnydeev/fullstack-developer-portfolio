import mongoose from "mongoose";

interface IConnection {
    isConnected: boolean;
}

const connection: IConnection = { isConnected: false };

export async function connectDB(): Promise<typeof mongoose | null> {
    if (connection.isConnected) {
        
        return mongoose;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error(
            "MONGODB_URI no está definido en las variables de entorno."
        );
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);

        connection.isConnected = db.connections[0].readyState === 1;

        console.log("Conexión establecida con MongoDB");
        console.log("Nombre de Base de datos:", db.connection.db?.databaseName);

        return db;
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        return null;
    }
}
