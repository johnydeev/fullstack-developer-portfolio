import { NextResponse } from "next/server";
import Contact from "@/models/users";
import { connectDB } from "@/utils/connectDB";

export async function GET() {
    console.log("Obteniendo todos los Contactos...");
    await connectDB();
    const allUsers = await Contact.find();
    return NextResponse.json(allUsers);
    }

    export async function POST(request) {
    await connectDB();

    try {
        console.log("POST /api/users");
        const data = await request.json();
        const saveData = { name: data.name, email: data.email };
        console.log("saveData>>>", saveData);

        const existingUser = await Contact.findOne({ email: saveData.email });
        console.log("Usuario a validar>>", existingUser);

        const currentTime = new Date()
        console.log("currentTime>>>", currentTime);

        if (existingUser) {
        console.log("Mail existente>>>", existingUser.email);

        const timeDifference =
            (currentTime - existingUser.lastAttempt) / (1000 * 60); // Diferencia en minutos

        if (timeDifference < 5) {
            return NextResponse.json(
            { message: "Por favor, espera antes de intentar enviar nuevamente." },
            { status: 429 }
            );
        }

        existingUser.emailAttempts += 1;
        existingUser.lastAttempt = currentTime;
        existingUser.isNewUser = false;
        await existingUser.save();

        return NextResponse.json(
            {
            message:
                "Ya existe el email en la base de datos. Intentos de envío actualizados.",
            },
            { status: 202 }
        );
        }

        const newUser = new Contact({
        ...saveData,
        isNewUser: true,
        emailAttempts: 1,
        lastAttempt: currentTime,
        });
        console.log("Nuevo usuario>>>", newUser);

        const saveUser = await newUser.save();
        console.log("Agregando nuevo contacto...");
        console.log(saveUser);
        return NextResponse.json(saveUser, { status: 201 });
    } catch (error) {
        console.error("Error en la función POST:", error);
        return NextResponse.json(
        { message: "Error interno del servidor" },
        { status: 500 }
        );
    }
}
