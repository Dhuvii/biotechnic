import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biotechnic",
  description: "Immunotherapy for Cancer",
};

const customFont = localFont({
  src: [
    {
      path: "../../public/BITSUMIS.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} antialiased font-custom`}
      >
        {children}
      </body>
    </html>
  );
}
