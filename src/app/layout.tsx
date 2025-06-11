import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'styles/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Den's Dev Blog",
  description: '개발 관련 지식과 경험을 공유하는 기술 블로그입니다.',
  keywords: ['개발', '프로그래밍', '웹 개발', '기술 블로그', 'Den Shin'],
  authors: [{ name: 'Den Shin' }],
  openGraph: {
    title: "Den's Dev Blog",
    description: '개발 관련 지식과 경험을 공유하는 기술 블로그입니다.',
    url: 'https://shinyeonghyeon.co.kr/',
    siteName: "Den's Dev Blog",
    locale: 'ko_KR',
    type: 'website',
  },
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
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:bg-gray-700 hover:text-white">
                  DEN.SHIN.DEV
                </Link>
                <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  CONTACT
                </Link>
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
        <SpeedInsights />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  )
} 