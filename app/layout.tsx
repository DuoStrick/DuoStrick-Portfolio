import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duostrick.tradeslook.com"),
  title: "Duostrick - Indie Game Studio",
  description: "Independent studio building fun mobile games and smart apps like 2048 Infinity Grid.",
  openGraph: {
    title: "Duostrick",
    description: "Indie studio building fun mobile games and smart apps.",
    url: "https://duostrick.tradeslook.com",
    siteName: "Duostrick Game Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Duostrick Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duostrick",
    description: "Indie studio building fun mobile games and smart apps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
