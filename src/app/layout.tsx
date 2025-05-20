import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist to Inter as per design_guidelines.md
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import MobileMenu from "@/components/layout/MobileMenu"; // Import MobileMenu

// Font setup for Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Using a more standard variable name
});

export const metadata: Metadata = {
  title: "ElectronicsStore - Your Go-To Tech Shop", // Updated title
  description:
    "Find the latest electronics, gadgets, and accessories at ElectronicsStore. Computers, tablets, phones, and more.", // Updated description
  keywords:
    "electronics, gadgets, tech, computers, tablets, smartphones, accessories", // Added keywords for SEO
  authors: [{ name: "ElectronicsStore Team" }],
  // Add other relevant metadata like openGraph, twitter, etc. as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="font-inter antialiased flex flex-col h-full bg-background text-foreground">
        <Header />
        <div className="flex flex-1 pt-16">
          {/* Adjust pt if Header height changes */}
          {/* Sidebar for larger screens */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {/* MobileMenu button will be part of the Header, actual menu is fixed/overlay */}
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
