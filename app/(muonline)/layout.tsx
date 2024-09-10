import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMu from "./_Components/NavBar";
import { favicon_mu } from "@/components/favicons";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.css"
import "@/styles/mu.css"

import TopBar from "./_Components/TopBar/TopBar";
import { Provider } from "./_Providers";
import Adsense from "@/components/seo/Adsense";
import Head from "next/head";
import FooterComponent from "../(main)/_components/Footer";
import NavAll from "./_Components/NavBar/MuNavBar";
export const metadata: Metadata = {
  title: "MuOnline Callejon",
  description: "Lets Play Together",
  icons: {
    icon: favicon_mu.src // /public path
  },
  
};

export default function MuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>
        <Adsense pId="ca-pub-6919811732951558"></Adsense>
        <meta name="google-adsense-account" content="ca-pub-6919811732951558"></meta>
        <body>
          <Provider>
            <TopBar></TopBar>
            <NavMu></NavMu>
            {children}
            <FooterComponent></FooterComponent>
          </Provider>
        </body>
      </html>
    
  )
}
