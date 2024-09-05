import { Metadata } from "next";
import NavMu from "../(muonline)/_Components/NavBar"
import "@/styles/mu.css"
import "../globals.css"
import { favicon_main } from "@/components/favicons";

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
      <body>
        <NavMu></NavMu>
        {children}
      </body>
    </html>
  )
}
