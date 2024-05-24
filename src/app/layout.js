
import './globals.css'
import Footer from '@/components/footer'
import Cv from '@/components/Cv'
import Navbar from '@/components/navbar';
import { Context } from '@/components/Context';


export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
