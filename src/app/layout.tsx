import "./globals.css";

import type { Metadata } from "next";

import {
  IBM_Plex_Sans as font_sans,
  IBM_Plex_Mono as font_mono,
} from "next/font/google";

const fontSans = font_sans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = font_mono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gaurav's portfolio",
  description: "Building unlisted projects for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
