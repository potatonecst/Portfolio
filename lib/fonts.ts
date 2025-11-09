import { Noto_Sans_JP, Geist, Geist_Mono } from "next/font/google"

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["HiraginoSans", "Hiragino Kaku Gothic proN", "sans-serif"],
})

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});