import * as React from "react";
//import Link from "next/link";

import type { Metadata } from "next";
import { notoSansJP, geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "あぬ（potatonecst）のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja-JP" className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <div className="grow grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-8">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}