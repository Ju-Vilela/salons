import type { Metadata } from "next"
import { Toaster } from "sonner"
import { Inter } from "next/font/google"

import Footer from "@/app/_components/footer"
import AuthProvider from "@/app/_providers/auth"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Salons",
  description: "Generated by Vercel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
