import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/mc.css"
import "@/app/globals.css"
import { favicon_mc } from "@/components/favicons";
import NavMu from "../(muonline)/_Components/NavBar";
import { Provider } from "../(muonline)/_Providers";
import TopBar from "../(muonline)/_Components/TopBar/TopBar";
import Head from "next/head";

import Adsense from "@/components/seo/Adsense";
import Adbanner from "@/components/seo/Adbanner";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Minecraft Callejon SMP",
  description: "Lets Play Together",
  icons: {
    icon: favicon_mc.src // /public path
  },
  
};

export default function McLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
<Adsense pId="ca-pub-6919811732951558"></Adsense>
    <body>
      <Provider>
        <TopBar></TopBar>
        <NavMu></NavMu>
        {children}
      </Provider>
      
    </body>
    
  </html>
    
  )
}
