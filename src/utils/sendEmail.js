import { createTransport } from 'nodemailer';
import smtpTransport from'nodemailer-smtp-transport'

const transporter = createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_USER,
      pass: process.env.NEXT_PASS,
    },
  })
);


transporter.verify(function (error, success) {
    if (error) {
        console.log("Verify error",error);
    } else {
        console.log("Server is ready to take our messages",success);
    }
});

module.exports = {transporter};