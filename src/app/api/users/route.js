import {NextResponse} from 'next/server'
import contactModel from '@/models/contact'
import {connectDB} from '@/utils/connectDB'


export async function GET(){
    console.log("Obteniendo todos los Contactos...")
    const allUsers = await contactModel.find();
    return NextResponse.json(allUsers)
}

export async function POST(request){
    
    await connectDB()
    try {                
        console.log("Entro al try POST")
        const data = await request.json()
        console.log("data>>>",data)
        const {email} = data
        
        console.log("Linea25>>")
        const existingUser = await contactModel.findOne({ email: email });
        console.log("existingUser>>", existingUser)

        if (existingUser) {
            console.log("Error en el IF existingUser>>>")
            return NextResponse.error("Ya existe el email",{status: 400})
        }

        const newUser = new contactModel(data);
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