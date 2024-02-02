import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FootComp } from './footer'
import { HeaderComp } from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body>
     
      <HeaderComp/>
        {children}

       
        <FootComp/>
        
        </body>
      
    </html>
  )
}
