import './globals.css'
import Link from "next/link"

export const metadata = {
  title: 'Fresh',
  description: 'My app',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <link rel='icon' href='/favicon.png' />

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
      <img src='/favicon.png' style={{width: '20px', height: '15px', paddingRight: '20px'}}/>
      <Link href="/">HOME</Link>
      <Link href="/list">LIST</Link>
      <Link href="/cart">CART</Link>
      <Link href="/test">TEST</Link>
    </div>
  )
}
