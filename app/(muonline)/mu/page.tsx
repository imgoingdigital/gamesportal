import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div className='main'>Mu Homepage</div>
  )  
}

export default page