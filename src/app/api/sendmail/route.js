import { NextResponse } from "next/server";
import { transporter } from "@/utils/sendEmail";
import path from "path";

export async function POST(request) {
  const { name, email, message } = await request.json();
  console.log("name>>>", name);
  console.log("email>>>", email);
  console.log("message>>>", message);
  try {
    if (!name || !email) {
      return NextResponse.json({ message: "Faltan datos" });
    }
    console.log("Mail a enviar>>", email);

    const attachmentPath = path.join(
      process.cwd(),
      "public",
      "CV Jonathan Castro - Desarrollador Full Stack.pdf"
    );
    const response = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_USER,
      to: email,
      subject: "Johnydeev",
      text: `Hola ${name}! Espero que te encuentres bien, en primer lugar te agradezco por confiar en mi portfolio web que hice con mucho esfuerzo y ❤, segundo.. en breve estare en contacto para charlar acerca de tu propuesta. Gracias!\n\nPD: Adjunto mi CV`,
      attachments: {
        path: attachmentPath,
        contentType: "application/pdf",
      },
    });
    const avisoDeContacto = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_USER,
      to: process.env.NEXT_PUBLIC_USER,
      subject: email,
      text: message,
    });
    console.log("envio exitoso", response);
    console.log("AvisoDeContacto>>", avisoDeContacto);
    return NextResponse.json("successful shipment");
  } catch (error) {
    console.log("errorRouteSendEmail>>>", error);
    return NextResponse.json(error);
  }
}
// import { promises as fs } from 'fs';

// console.log("mailOptions>>>",mailOptions)
// await fs.writeFile('./promesas.txt', 'Hola mundo con promesas')
// await fs.appendFile('./promesas.txt', 'Como estas??')
// const response = await fs.readFile('./promesas.txt', 'utf-8')
// console.log("response>>>",response)
// await fs.unlink('./promesas.txt')
