import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import "./globals.css"

const robotoSlab = Roboto_Slab({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saylor's Nails",
  description: "Professional nail artistry with a personal touch",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  )
}
