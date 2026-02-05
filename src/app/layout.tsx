import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Future Focus Language Training Center | Cami teaches Korean | Top Korean Language School & EPS-TOPIK Training',
  description: 'Enroll at Future Focus, the leading Korean Language Center. Specialized EPS-TOPIK review, Hangul for beginners, and work-in-Korea preparation. Appear Top 3 on Google with eMVeOzHub SEO.',
  keywords: [
    'Korean Language School Malate, Manila',
    'EPS-TOPIK Training Center',
    'Learn Korean Philippines',
    'Future Focus Korean',
    'Cami teaches Korean',
    'Hangul for beginners',
    'Work in South Korea'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}