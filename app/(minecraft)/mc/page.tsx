import React from 'react'
import ServerCard from '../_components/ServerCard'
import {servers} from "../_constants/index"
const page = async () => {
  
  return (
    <div className='main'>
      {
      servers.map ((s) => (

        <ServerCard key = {s.name} serverdata={s} ></ServerCard>  
      ))}
      
    </div>
  )
}

export default page