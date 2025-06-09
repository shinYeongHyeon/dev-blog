import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Den's Dev Blog",
  description: 'Den`s Dev Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7058561196110489"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className}`}>
        <div className="min-h-screen">
          <nav className="bg-gray-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex space-x-4">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:bg-gray-700 hover:text-white">
                  DEN.SHIN.DEV
                </a>
                <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  CONTACT
                </a>
              </div>
            </div>
          </nav>
          <main className="bg-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-6">
            {children}
            </div>
          </main>
        </div>
        <ToastContainer />
      </body>
    </html>
  )
} 