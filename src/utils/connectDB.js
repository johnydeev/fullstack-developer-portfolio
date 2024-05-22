import { connect,connection } from "mongoose";

const conn = {
    isConnected:false
}

export async function connectDB(){    
    if(conn.isConnected) return
    try {
        const db = await connect(process.env.NEXT_PUBLIC_DATABASE_URL,{useNewUrlParser:true})
        console.log("Nombre Base de Datos: ",db.connection.db.databaseName)
        conn.isConnected = db.connections[0].readyState
        
        return conn
    } catch (error) {
        return console.log(error)
    }    
}
connection.on('connected', ()=>{
    console.log('mongoose connection established')
})

connection.on('error',(err)=>{
    console.log('mongoose connection error', err);
})
