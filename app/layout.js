import { Inter } from 'next/font/google'
import './globals.css'

//components
//import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Grand Budapest Hotel',
  description: 'Managemet System for The Grand Budapest Hotel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
