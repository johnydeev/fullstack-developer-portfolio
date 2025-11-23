import { NextResponse } from "next/server";
import { transporter } from "@/utils/sendEmail";
import path from "path";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactRequest;

    console.log("name>>>", name);
    console.log("email>>>", email);
    console.log("message>>>", message);

    if (!name || !email) {
      return NextResponse.json(
        { message: "Faltan datos" },
        { status: 400 }
      );
    }

    console.log("Mail a enviar>>", email);

    const attachmentPath = path.join(
      process.cwd(),
      "public",
      "CV Jonathan Castro - Desarrollador Full Stack.pdf"
    );

    // Enviar al usuario
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_USER,
      to: email,
      subject: "Johnydeev",
      text: `Hola ${name}! Espero que te encuentres bien. Gracias por confiar en mi portfolio web hecho con mucho esfuerzo ❤️.

En breve estaré en contacto para hablar sobre tu propuesta.

PD: Adjunto mi CV.`,
      attachments: [
        {
          path: attachmentPath,
          contentType: "application/pdf",
        },
      ],
    });

    // Enviar notificación a vos
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_USER,
      to: process.env.NEXT_PUBLIC_USER,
      subject: `Mensaje de ${name} (${email})`,
      text: message,
    });

    return NextResponse.json("successful shipment");
  } catch (error) {
    console.log("errorRouteSendEmail>>>", error);
    return NextResponse.json(
      { error: "Internal server error", detail: String(error) },
      { status: 500 }
    );
  }
}

// import { promises as fs } from 'fs';

// console.log("mailOptions>>>",mailOptions)
// await fs.writeFile('./promesas.txt', 'Hola mundo con promesas')
// await fs.appendFile('./promesas.txt', 'Como estas??')
// const response = await fs.readFile('./promesas.txt', 'utf-8')
// console.log("response>>>",response)
// await fs.unlink('./promesas.txt')
