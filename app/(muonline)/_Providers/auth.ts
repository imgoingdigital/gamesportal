// imports
// import type { Adapter } from "next-auth/adapters"; 
import NextAuth, { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
// import {PrismaAdapter} from '@auth/prisma-adapter'
 
import MuDb from "@/prismaClient";
import Email from "next-auth/providers/email";
import { encode, JWT } from "next-auth/jwt"; 

import jwt from 'jsonwebtoken'
import { error } from "console";
import { number, promise } from "zod";
import { hashPassword } from "@/lib";
import { AdapterUser } from "next-auth/adapters";
// interface Credentials extends Record<"account" | "password", string| undefined> {}
export const authenticator: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        account: {
          label: "account", 
          type: 'string', 
          placeholder: "username"
        },
        password: {
          label: "Password", 
          type: 'password'
        },
      },
      
      
      async authorize(credentials): Promise<User> {
        try {

          if(!credentials) throw new Error("Credentials is empty")
          const {account, password} = credentials
          const pwHash = hashPassword(`${account}:${password}`)

          if(!account || !password){ //No Inputs
            throw new Error("No Inputs Found")
          }
          
          const gameAccount = await MuDb.accounts.findFirst({
            where: {
                account
            }
          });
          
          if(!gameAccount){
            throw new Error("Account Does Not Exist!")
          }
          
          const isValidPassword = (gameAccount.password === pwHash)
          if(!isValidPassword){
            throw new Error("Password is Incorrect!")
          }
          

          //TODO: TEST IF this returns null when no match or ....


          const userData = {
            isAdmin: false,
            id: gameAccount.account,
            guid: gameAccount.guid ,
            email: gameAccount.email,
            token: ''
            
          }
          return userData;
        } catch (error) {
          console.log (error)
          throw new Error("authenticator error")          
        } 
      }
    }),
  ],
  pages: { //DONT TOUCH THIS!!!
    signIn:"/mu/login",
    signOut: "/mu/logout"
  },
  secret: process.env.NEXTAUTH_SECRET,

  jwt:{ //DONT TOUCH THIS!!!
    async encode({secret, token}) {
      if(!token){
        throw new Error("Token Not Found!")
      }
      return jwt.sign(token, secret);
    },

    async decode({secret, token}) {
      
    if(!token){
      throw new Error("Token Not Found!")
    }
    const decodedToken = jwt.verify(token, secret);
    if(typeof decodedToken === 'string'){
      return JSON.parse(decodedToken)
    } else return decodedToken

    }
  },
  session: { //DONT TOUCH THIS!!!
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },

  
  callbacks: {
    async session(params: {session: Session; token: JWT; user: User}) {
      // async session({ session, token, user }) {
      if(params.token){
        const accountData = await MuDb.account_data.findFirst({
          where: {
            account_id: params.token.user.guid
          }
        })
        params.token.user.credits  = accountData?.credits
        params.session.user = params.token.user

      }
        return params.session;
      },
    async jwt(params: {
            token: JWT;
            user?: User | AdapterUser | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
    
          }){
      if(params.user) {
        params.token.user = params.user
      
      }
      
      return params.token //{...params.token, ...params.user}
    } //jwt
  },
  
};

export default NextAuth(authenticator);


