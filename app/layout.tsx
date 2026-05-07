import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GlobalMotion } from "@/components/GlobalMotion";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Astra GT | Premium Automotive Portfolio",
  description: "A premium automotive landing page portfolio built with Next.js, Tailwind CSS, Framer Motion, and GSAP."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} noise antialiased`}>
        <GlobalMotion />
        {children}
      </body>
    </html>
  );
}
