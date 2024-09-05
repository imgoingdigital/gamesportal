"use server"

import { hashPassword, toStringDate } from "@/lib"
import prismaClient from "@/prismaClient"



export  const signUp = async(username: string, email: string, password: string) => {
  const user = await prismaClient.accounts.findFirst({
    where: {
      account: username,
    }
  })

  if(user){
    return "Username is already taken!"
  }

  const pwHash = hashPassword(`${username}:${password}`)
  console.log(`(${username}:${password})${pwHash}`)
  const curDate = new Date()
  const n = Number(toStringDate(curDate))
  const s = toStringDate(curDate)
  console.log(s)
  console.log(n)
  await prismaClient.accounts.create({
    data: {
      account: username,
      email,
      password: pwHash,
      created_at: curDate,
      register: Number(toStringDate(curDate)),
      security_code: "webengine"
    }
  })

  return "Create User Success. Enjoy!"
}