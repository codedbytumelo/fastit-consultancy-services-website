// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/sections/Navbar"; // Using your path alias
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FastIT Consultancy Services",
  description: "Accelerating your business with agile IT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Changed to a dark theme
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}