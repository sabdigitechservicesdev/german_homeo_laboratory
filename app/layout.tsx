// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'German Homoeo Laboratory - Best Homeopath in Howrah, Salap, Ranihati, Dakshineswar',
  description: 'Trusted homeopathic clinic led by Dr. S. Patra, DHMS. Specialized treatment for piles, fistula, hair loss, female diseases, paralysis, and more.',
}

/**
 * Root layout component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}