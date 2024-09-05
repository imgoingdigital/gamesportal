import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMu from "./_Components/NavBar";
import { favicon_mu } from "@/components/favicons";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.css"
import "@/styles/mu.css"

import TopBar from "./_Components/TopBar/TopBar";
import { Provider } from "./_Providers";
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
