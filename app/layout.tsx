import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/app/components/LanguageProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrioVerse Labs | Engineering Digital Ecosystems",
  description:
    "High-performance software solutions for agencies, consultants, and enterprises. We sync logic with creativity.",

  // الكلمات المفتاحية (Keywords)
  keywords: [
    "Software Development",
    "Digital Ecosystems",
    "TrioVerse",
    "Web Apps",
    "System Architecture",
  ],

  // إعدادات الـ Open Graph (للفيسبوك والواتساب ولينكد إن)
  openGraph: {
    title: "TrioVerse Labs | Engineering Digital Ecosystems",
    description:
      "Architecting the next generation of digital solutions. Elevate your enterprise with TrioVerse.",
    url: "https://trio-verse.com",
    siteName: "TrioVerse Labs",
    images: [
      {
        url: "/og-image.jpg", // المسار للصورة في مجلد public
        width: 1200,
        height: 630,
        alt: "TrioVerse Labs Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // إعدادات تويتر (X)
  twitter: {
    card: "summary_large_image",
    title: "TrioVerse Labs | Engineering Digital Ecosystems",
    description:
      "High-performance software solutions. We sync logic with creativity.",
    images: ["/og-image.jpg"],
  },

  // أيقونة الموقع (Favicon)
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
