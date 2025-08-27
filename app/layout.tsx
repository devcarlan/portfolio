import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'

const noto = Noto_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Carlan Henry's Portfolio Site",
  description:
    'Carlan Henry | Front End Developer | Back End Developer | FullStack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${noto.className} antialiased`}>
        <Navbar />
        <div className='min-h-screen flex flex-col'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
