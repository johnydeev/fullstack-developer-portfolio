
import './globals.css'
import Footer from '@/components/Footer'
import Cv from '@/components/Cv'
import Navbar from '@/components/Navbar';
import { Context } from '@/components/Context';
import type { ReactNode } from "react";



export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

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
