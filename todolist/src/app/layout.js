import { Inter } from 'next/font/google';
import "@/style/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-2xl m-auto my-16 p-7 border-double border-4 border-slate-800 '>
          {children}
        </main>
      </body>
    </html>
  )
}
