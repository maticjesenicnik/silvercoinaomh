'use client'
import './globals.css'
import { Header } from './Header'
import { Footer } from './Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en">
      <head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={'bg-background'}>
        <Header />
        <main className={'min-h-[82.95vh] pb-28 bg-[url("/images/bg_texture.webp")] text-white pt-20 text-2xl'}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
