import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import { Inter } from 'next/font/google';
import "./globals.css";
import Spotlight from "@/components/ui/spotlight";

const primary_font = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['300', '400', '500', '600', '700'],
});

const secondary_font = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['200', '300', '400', '500', '600'],
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
        {children}
      </body>
    </html>
  );
}
