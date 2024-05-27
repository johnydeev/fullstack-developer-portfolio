import {NextResponse} from 'next/server'
import usersModel from '@/models/users'
import {connectDB} from '@/utils/connectDB'


export async function GET(){
    console.log("Obteniendo todos los Contactos...")
    const allUsers = await usersModel.find()
    return NextResponse.json(allUsers)
}


export async function POST(request){
    
    try {
        await connectDB()
        console.log("POST /api/users")
        const data = await request.json()
        const saveData = { name: data.name, email: data.email }
        console.log("saveData>>>", saveData)
        
        const existingUser = await usersModel.findOne({ email: saveData.email })
        console.log("Usuario a validar>>", existingUser)

        if (existingUser) {
            console.log("Mail existente>>>",existingUser.email)            
            return NextResponse.json(
                { message: "En breve estaré respondiendo tu email." },
                { status: 202 }
            );
        }

        const newUser = new usersModel(saveData);
        console.log("Nuevo Contacto>>>",newUser)  
    
        const saveUser = await newUser.save()
        console.log("Agregando nuevo contacto...")
        console.log(saveUser)
        return NextResponse.json(saveUser, { status: 201 })
        
    } catch (error) {
        console.error("Error en la función POST:", error)
        return NextResponse.json(
            { message: "Error interno del servidor" },
            { status: 500 }
        );
    }    
}