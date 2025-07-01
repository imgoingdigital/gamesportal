// "use server"

import prismaClient from "@/prismaClient"

class v{
  id: string
  version: string
  game: string

}
const getVersion = async(version: string) => {
  
  if(version == "latest")
  {

    const clUpdate = await prismaClient.web_muclients.findFirst({
      orderBy:  {
        uploadDate: 'desc'
      }
    }) 

    return clUpdate

  } else
  {
    const clUpdate = await prismaClient.web_muclients.findFirst({
      where: {
        version: version
      }
    })
    return clUpdate;
  }
}

export {getVersion}