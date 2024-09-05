import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { favicon_main } from "@/components/favicons";
import TopBar from "./(muonline)/_Components/TopBar/TopBar";
import { Provider } from "./(muonline)/_Providers";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.css"
// import { MuNavBar } from "./(muonline)/_Components/NavBar/MuNavBar";
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
        <Provider>
          {/* <TopBar></TopBar> */}
        {children}
        </Provider>
      </body>
    </html>
  )
}
