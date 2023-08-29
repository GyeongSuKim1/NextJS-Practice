import './globals.css'
import Link from "next/link"

export const metadata = {
  title: 'Fresh',
  description: 'My app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navber />
        {children}
        </body>
    </html>
  )
}

function Navber() {
  return (
    <div className="navbar">
    <Link href="/">HOME</Link>
    <Link href="/list">LIST</Link>
    <Link href="/cart">CART</Link>
    <Link href="/test">TEST</Link>
  </div>
  )
}
