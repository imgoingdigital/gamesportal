//This one

// import { authOptions } from "@/app/_Providers/nextAuth";
// import { authOptionsOld } from "@/app/_providers/nextAuth/auth";
// import authenticator from "@/app/_providers/nextAuth/authenticator";

import { authenticator } from "@/app/(muonline)/_Providers/auth";
import NextAuth from "next-auth/next";

const handler = authenticator


export{handler as GET, handler as POST}