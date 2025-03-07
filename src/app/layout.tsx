import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu=Ubuntu({
  weight:["300","400","500","700"],
  variable:"--font-ubuntu",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Juan Calvache",
  description: "Juan Calvache Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ubuntu.variable} ${geistSans.variable} ${geistMono.variable}  md:max-w-4xl mx-auto px-8 md:px-4  antialiased`}
      >
         <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
