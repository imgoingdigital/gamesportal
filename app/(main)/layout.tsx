import { Metadata } from "next";
import NavMu from "../(muonline)/_Components/NavBar"
import "@/styles/mu.css"
import "../globals.css"
import { favicon_main } from "@/components/favicons";
import Head from "next/head";
import Adsense from "@/components/seo/Adsense";

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
              <Head>
          <Adsense pId="ca-pub-6919811732951558"></Adsense>
        </Head>
      <body>
        <NavMu></NavMu>
        {children}
      </body>
    </html>
  )
}
