import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
        from: 'castrojonathand@gmail.com',
        to: 'castrojonathand1989@gmail.com',
        subject: 'Waitlist',
        html: '<h1>Hi</h1>',
        headers: {
            'X-Entity-Ref-ID': uuid(),
        },
    });

        return Response.json(data);
    } catch (error) {
        return Response.json("hubo un error",{ error });
    }
}