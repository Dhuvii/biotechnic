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
  title: "Biotechnic - Supra Biotechnology",
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

const gameCube = localFont({
  src: [
    {
      path: "../../public/GameCube.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-game-cube",
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
        className={`${geistSans.variable} ${gameCube.variable} ${geistMono.variable} ${customFont.variable} font-custom antialiased`}
      >
        <div
          id="select-container"
          className="relative isolate z-[999999999]"
        ></div>
        <div
          id="menu-container"
          className="relative isolate z-[999999999]"
        ></div>
        {children}
      </body>
    </html>
  );
}
