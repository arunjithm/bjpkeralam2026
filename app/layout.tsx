import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Keralam's Saffron Dawn",
  description: "A data-driven history of BJP/NDA growth in Keralam from 2010 to 2025 across every election tier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-dark-900 text-white min-h-screen selection:bg-bjp-saffron selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
