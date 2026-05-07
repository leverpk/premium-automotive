import type { Metadata } from "next";
import { GlobalMotion } from "@/components/GlobalMotion";
import "./globals.css";

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
      <body className="noise antialiased">
        <GlobalMotion />
        {children}
      </body>
    </html>
  );
}
