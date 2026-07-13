
import './globals.css'
import Footer from '@/components/Footer'
import Cv from '@/components/Cv'
import Navbar from '@/components/Navbar';
import { Context } from '@/components/Context';
import type { Metadata } from 'next';
import type { ReactNode } from "react";

const title = 'Jonathan Castro | Full Stack Developer';
const description = 'Full Stack Developer con más de 2 años de experiencia en React, Node.js y TypeScript. Disponible para roles remotos desde Buenos Aires, Argentina.';

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_AR',
    images: ['/jonathan-pic.jpg'],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/jonathan-pic.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className="dark:text-white dark:bg-slate-900" suppressHydrationWarning={true}>
        <Context>
          <Navbar/>
          <Cv/>
          {children}
          <Footer/>
        </Context>
      </body>
    </html>

  )
}
