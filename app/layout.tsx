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
  metadataBase: new URL("https://iankorovinsky.ca"),
  title: "Ian Korovinsky",
  description: "Dream it. Build it. Ship it.",
  openGraph: {
    title: "Ian Korovinsky",
    description: "Dream it. Build it. Ship it.",
    images: [
      {
        url: "/thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: "Ian Korovinsky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Korovinsky",
    description: "Dream it. Build it. Ship it.",
    images: ["/thumbnail.jpeg"], 
  },
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
