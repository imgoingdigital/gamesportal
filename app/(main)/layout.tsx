import { Metadata } from "next";
import NavMu from "../(muonline)/_Components/NavBar"
import "@/styles/mu.css"
import "../globals.css"
import { favicon_main } from "@/components/favicons";
import Head from "next/head";
import Adsense from "@/components/seo/Adsense";
import Adbanner from "@/components/seo/Adbanner";

export const metadata: Metadata = {
  title: "Callejon Games",
  description: "Gamers Unite!",
  icons: {
    icon: favicon_main.src // /public path
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Adsense pId="ca-pub-6919811732951558"></Adsense>

      <body>
        <NavMu></NavMu>
        {children}
        {/* <Adbanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9956317112"></Adbanner> */}
      </body>
    </html>
  )
}
