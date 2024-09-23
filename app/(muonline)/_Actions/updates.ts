// "use server"

import prismaClient from "@/prismaClient"


const getVersion = async(version: string) => {
  
  if(version == "latest")
  {
    const clUpdate = await prismaClient.web_muclients.findFirst({
      orderBy:  {
        uploadDate: 'desc'
      }
    })  
    return JSON.stringify(clUpdate)
  } else
  {
    const clUpdate = await prismaClient.web_muclients.findFirst({
      where: {
        version: version
      }
    })
    return JSON.stringify(clUpdate);
  }
}

export {getVersion}