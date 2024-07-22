import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sambath S - Data Science Professional',
  description: 'Portfolio of Sambath S, a seasoned Data Science Professional with expertise in machine learning and predictive modeling.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}