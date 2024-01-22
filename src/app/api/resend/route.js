// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';
// import { EmailTemplate } from '@/components/email-template';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//     try {
//         const data = await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: 'castrojonathand1989@gmail.com',
//             subject: 'Waitlist',
//             html: EmailTemplate,
//             text: '',
            
//         });
//         console.log("data>>",data)

//         return NextResponse.json({message:"Mensaje enviado!"},{status:200})
//     } catch (error) {
//         return Response.json("hubo un error",{ error });
//     }
// }