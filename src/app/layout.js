import './globals.css'
import './particle-background.css'; // Adjust path if needed

import { Inter } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundParticles from './components/BackgroundParticles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Savreen Tiwana',
  description: 'Savreen Tiwana CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <BackgroundParticles />
      <ToastContainer />
      </body>
    </html>
  )
}
