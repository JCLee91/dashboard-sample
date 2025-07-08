import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PropAnalyzer - 상업용 부동산 투자 분석",
  description: "임대차계약서 분석 및 렌트롤 생성 서비스",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  )
}
