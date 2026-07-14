import { NextResponse } from "next/server";
import { transporter } from "@/utils/sendEmail";
import path from "path";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting en memoria: best-effort, se reinicia si la función serverless
// se enfría, pero alcanza para frenar abuso casual del envío de correos.
const RATE_LIMIT_WINDOW_MS = 60_000;
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const lastRequest = rateLimitMap.get(ip);
  const now = Date.now();

  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  rateLimitMap.set(ip, now);
  return false;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("Falta configurar RECAPTCHA_SECRET_KEY en las variables de entorno.");
    return false;
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await response.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Por favor, espera un minuto antes de volver a intentar." },
        { status: 429 }
      );
    }

    const { name, email, message, recaptchaToken } = (await request.json()) as ContactRequest;

    if (!name || !email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Faltan datos o el email no es válido" },
        { status: 400 }
      );
    }

    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json(
        { message: "Verificación de reCAPTCHA fallida" },
        { status: 400 }
      );
    }

    const attachmentPath = path.join(
      process.cwd(),
      "public",
      "CV Castro Jonathan Desarrollador Full Stack.pdf"
    );

    // Enviar ambos correos en paralelo en vez de uno tras otro.
    await Promise.all([
      // Al usuario
      transporter.sendMail({
        from: process.env.EMAIL_USER,
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
      }),
      // Notificación a vos
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Mensaje de ${name} (${email})`,
        text: message,
      }),
    ]);

    return NextResponse.json("successful shipment");
  } catch (error) {
    console.error("Error en /api/sendmail:", error);
    return NextResponse.json(
      { error: "Internal server error", detail: String(error) },
      { status: 500 }
    );
  }
}
