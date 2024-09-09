import MainNavbar from "@/components/NavBars/MainNavbar";
import Image from "next/image";
import "../globals.css"
import "@/styles/main.css"
import Adbanner from "@/components/seo/Adbanner";
import { HomeCarousel } from "./_components/HomeCarousel";
export default function Home() {
  return (
    <div className="main">

      Root Home
      {/* <HomeCarousel></HomeCarousel> */}
      {/* <Adbanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9956317112"></Adbanner> */}
    </div>
   );
}
