'use client'
import './globals.css'
import { Header } from './Header'
import { Footer } from './Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main className={'min-h-[82.95vh] mt-[5rem] text-white bg-[url("/images/bg_texture.jpg")]'}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
