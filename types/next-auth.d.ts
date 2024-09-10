import NextAuth, { User, type DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean;
      id: string;
      
      guid: number;
      token?: string;
      credits?: number;
      email?: string
    } 
  }
  interface User {
    isAdmin: boolean;
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
      isAdmin: boolean;
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



