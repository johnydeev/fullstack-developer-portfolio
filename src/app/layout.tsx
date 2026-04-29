
import './globals.css'
import Footer from '@/components/Footer'
import Cv from '@/components/Cv'
import Navbar from '@/components/Navbar';
import { Context } from '@/components/Context';
import type { ReactNode } from "react";



export const metadata = {
  title: 'Jonathan Castro | Full Stack Developer',
  description: 'Full Stack Developer con más de 2 años de experiencia en React, Node.js y TypeScript. Disponible para roles remotos desde Buenos Aires, Argentina.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> 
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>     
      </head>
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
