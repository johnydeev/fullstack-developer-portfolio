import nodemailer, { Transporter } from "nodemailer";

if (!process.env.NEXT_PUBLIC_USER || !process.env.NEXT_PUBLIC_PASS) {
    throw new Error(
        "Falta configurar EMAIL_USER o EMAIL_PASS en las variables de entorno."
    );
}

const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_USER,
        pass: process.env.NEXT_PUBLIC_PASS,
    },
});

transporter.verify((error: Error | null, success: boolean) => {
    if (error) {
        console.error("Error en transporter.verify:", error);
    } else {
        console.log("Servidor listo para enviar emails:", success);
    }
});

export { transporter };
