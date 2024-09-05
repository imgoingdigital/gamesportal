import NextAuth, { User, type DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      
      guid: number;
      token?: string;
      credits?: number;
      email?: string
    } 
  }
  interface User {
    id: string;
    guid: number;
    token?: string;
    credits?: number;
    email?: string
    
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string ;
      guid: number;
      token?: string;
      credits?: number;
      email?: string
    };
  }
}








// import NextAuth, { User, type DefaultSession } from "next-auth";
// declare module "next-auth" {
//   interface Session {
//     user: {
//       username: string;
//       id: string;
//       token: string;
//       credits: number;
//       email: string
//     } 
//   }
//   interface User {
//     username: string;
//     id: string;
//     token: string;
//     credits: number;
//     email: string
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user: {
//       username: string;
//       id: string;
//       token: string;
//       credits: number;
//       email: string
//     };
//   }
// }



