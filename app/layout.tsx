import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Spotlight from "@/components/ui/spotlight";

const primary_font = GeistMono;
const secondary_font = localFont({
  src: '../public/fonts/Aeonik-Regular.otf',
  variable: '--font-secondary'
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
      <body className={`${primary_font.variable} ${secondary_font.variable} antialiased`}>
        <Spotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
