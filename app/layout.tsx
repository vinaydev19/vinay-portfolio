import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinay Kumar Porandla - MERN Stack Developer",
  description:
    "Portfolio of Vinay Kumar Porandla, a passionate MERN Stack Developer building scalable full-stack web applications with modern technologies.",
  keywords:
    "MERN Stack Developer, React.js, Node.js, MongoDB, Express.js, Full Stack Developer, Web Developer, JavaScript",
  authors: [{ name: "Vinay Kumar Porandla" }],
  openGraph: {
    title: "Vinay Kumar Porandla - MERN Stack Developer",
    description: "Portfolio of Vinay Kumar Porandla, a passionate MERN Stack Developer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
