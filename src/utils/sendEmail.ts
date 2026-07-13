import nodemailer, { Transporter } from "nodemailer";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error(
        "Falta configurar EMAIL_USER o EMAIL_PASS en las variables de entorno."
    );
}

const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error: Error | null) => {
    if (error) {
        console.error("Error en transporter.verify:", error);
    }
});

export { transporter };
