// src/app/layout.tsx
import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import './globals.css'

// ✅ Google Fonts (App Router 推奨方式)
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-noto-serif',
})

// ✅ ページのタイトルや説明（SEO用）
export const metadata: Metadata = {
  title:
    'あんしん相続パック｜生前からもしもの後まで、家族を守るワンストップ相続支援',
  description:
    '相続の不安、まるごとお任せ33万円（税込）。相続税がかからないご家庭ほどトラブルに。専門家が相続の準備から手続きまでワンストップで支援し、家族の未来に安心をお届けします。まずは無料相談から。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} bg-white text-gray-800 font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
