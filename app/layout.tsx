import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Spotlight from "@/components/ui/spotlight";

const geistSans = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Korovinsky",
  description: "Dream it. Build it. Ship it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Spotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
