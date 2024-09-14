import News from '@/app/(launcher)/news/page'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'
import Install from './install'
const page = () => {
  return (
    <div>
      <News></News>
      <Install></Install>
    </div>
    
  )  
}

export default page