import { authenticator } from '@/app/(muonline)/_Providers/auth'
import prismaClient from '@/prismaClient'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async({params}:{params: {guid: string}}) => {
  const {user} = await getServerSession(authenticator)
  if(!user){
    return redirect("/mu/login")
  }
  console.log(params.guid)
  console.log(`ID: ${params.guid}`)
  // const char_data = await prismaClient.character_info.findFirst({
    
  // })
  // console.log(char_data)
  return (
    <div>A</div>
    // <div>Character Name: {char_data.name}: {id}</div>
  )
}

export default page