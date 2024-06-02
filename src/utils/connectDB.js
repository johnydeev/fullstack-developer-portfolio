import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
  db: null,
};

export async function connectDB() {
  if (conn.isConnected) {
    console.log("Using existing database connection");
    return conn.db;
  }

  try {
    const db = await connect(process.env.MONGODB_URI);
    conn.isConnected = db.connections[0].readyState;
    conn.db = db;
    console.log("Nombre Base de Datos: ", db.connection.db.databaseName);
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
  console.error("Mongoose connection error", err);
});
