import { NextResponse } from "next/server";
import Contact from "@/models/users";
import { connectDB } from "@/utils/connectDB";


interface ContactRequest {
  name: string;
  email: string;
}

export async function GET() {
  try {
    console.log("Obteniendo todos los Contactos...");
    await connectDB();

    const allUsers = await Contact.find();
    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/users:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// POST: Crear o actualizar usuario
export async function POST(request: Request) {
  await connectDB();

  try {
    console.log("POST /api/users");

    const data = (await request.json()) as ContactRequest;
    const saveData = { name: data.name, email: data.email };

    console.log("saveData>>>", saveData);

    const existingUser = await Contact.findOne({ email: saveData.email });
    console.log("Usuario a validar>>", existingUser);

    if (existingUser) {
      const currentTime = new Date();
      const lastAttempt = new Date(existingUser.lastAttempt ?? 0);

      const timeDifference =
        (currentTime.getTime() - lastAttempt.getTime()) / (1000 * 60); // Diferencia en minutos

      if (timeDifference < 1) {
        console.log("timeDifference>>>", timeDifference);
        return NextResponse.json(
          { message: "Por favor, espera antes de intentar enviar nuevamente." },
          { status: 429 }
        );
      }

      existingUser.isNewUser = false;
      existingUser.emailAttempts = (existingUser.emailAttempts ?? 0) + 1;
      existingUser.lastAttempt = currentTime;

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
      name: saveData.name,
      email: saveData.email,
      isNewUser: true,
      emailAttempts: 1,
      lastAttempt: new Date(),
    });

    console.log("Nuevo usuario>>>", newUser);

    const saveUser = await newUser.save();

    return NextResponse.json(saveUser, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/users:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

