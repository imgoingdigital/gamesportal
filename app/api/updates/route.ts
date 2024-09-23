import { NextRequest, NextResponse } from "next/server";
import { getVersion } from "@/app/(muonline)/_Actions/updates";

export async function GET(req: NextRequest) {
  const game = req.nextUrl.searchParams.get("g")
  const version = req.nextUrl.searchParams.get("v")
 
// if(game == "mu"){}

  switch (game) {
    case "mu":
      const   cliVer = await getVersion(version ?? "latest")
      return NextResponse.json(cliVer);
  
    default:
      return NextResponse.json(null);
      break;
  }
  
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}