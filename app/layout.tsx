import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Background } from "@/components/Background";
import Footer from "@/components/ui/Footer";
import { BrowserView, MobileView } from "react-device-detect";
import Header from "./features/header/Header";
import "./globals.css";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romain Marty, développeur web",
  description:
    " Développeur web fullstack, je suis spécialisé dans le développement d'applications web et mobiles.",
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
          <BrowserView>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white dark:from-black/0 to-transparent z-10" />
            dddd
          </BrowserView>
          <MobileView>{children}</MobileView>
          {/* </WavyBackground> */}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
