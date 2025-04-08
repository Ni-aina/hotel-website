import type { Metadata } from "next";
import { Dancing_Script, Geist, Geist_Mono, Mulish, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-danc",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const fontSans = `${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${raleway.variable} ${mulish.variable}`;

export const metadata: Metadata = {
  title: "Hotel website",
  description: "Website hotel blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${fontSans} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-white px-4 lg:px-8">
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
