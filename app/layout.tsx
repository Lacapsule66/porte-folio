import { Background } from "@/components/Background";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./features/header/Header";
import "./globals.css";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romain Marty - Web developer fullstack",
  description: "Romain Marty - Web developer fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="relative scrollbar ">
        <Providers>
          {/* <WavyBackground backgroundFill="hsl(var(--background))"> */}
          <Background className=" bg-transparent -z-20" />
          <Header />
          {children}
          {/* </WavyBackground> */}
        </Providers>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
