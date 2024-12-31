import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const aeonik = localFont({
  src: [
    {
      path: '../public/fonts/Aeonik-Bold.otf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik-BoldItalic.otf',
      style: 'italic',
    },
    {
      path: '../public/fonts/Aeonik-Light.otf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik-LightItalic.otf',
      style: 'italic',
    },
    {
      path: '../public/fonts/Aeonik-Regular.otf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik-RegularItalic.otf',
      style: 'italic',
    },
  ],
  variable: '--font-secondary',
});

const geistMono = Geist_Mono({
  variable: "--font-primary",
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
      <body className={`${geistMono.variable} ${aeonik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
