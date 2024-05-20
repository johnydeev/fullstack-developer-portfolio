import {NextResponse} from 'next/server'
import usersModel from '@/models/users'
import {connectDB} from '@/utils/connectDB'


export async function GET(){
    console.log("Obteniendo todos los Contactos...")
    const allUsers = await usersModel.find()
    return NextResponse.json(allUsers)
}

export async function POST(request){
    
    await connectDB()
    try {
        console.log("POST /api/users")
        const data = await request.json()
        const saveData = [data.name,data.email]
        console.log("saveData>>>", saveData);
        const { email } = saveData;
        
        const existingUser = await usersModel.findOne({ email: email });
        console.log("Usuario a validar>>", existingUser)

        if (existingUser) {
            console.log("Mail existente>>>",existingUser.email)
            return NextResponse.json("Ya existe el email en la base de datos",{status: 400})
        }

        const newUser = new usersModel(saveData);
        console.log("newContact>>>",newUser)  
    
        const saveUser = await newUser.save()
        console.log("Agregando nuevo contacto...")
        console.log(saveUser)
        return NextResponse.json(saveUser)
        
    } catch (error) {
        console.error("Error en la función POST:", error);
        return NextResponse.error("Error interno del servidor", { status: 500 }); 
    }    
}