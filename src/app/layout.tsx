import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider"; // 1. Import provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = { width: 'device-width', initialScale: 1 }

export const metadata: Metadata = {
  title: 'Future Focus Language Training Center | Cami teaches Korean | Top Korean Language School & EPS-TOPIK Training',
  description: 'Enroll at Future Focus, the leading Korean Language Center. Specialized EPS-TOPIK review, Hangul for beginners, and work-in-Korea preparation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500 min-h-screen flex flex-col`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange={false}
      >
        {/* I wrapped these in a div that explicitly lets pointer events pass through to children */}
        <div className="flex-grow pointer-events-auto">
          <Navbar />
          {children}
        </div>
      </ThemeProvider>
    </body>
    </html>
  );
}