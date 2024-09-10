"use client"
import React from 'react'
import styles from "./index.module.scss"
import { Card } from '@/components/ui/card'
import { getServerStatus } from '../../_utils'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

const ServerCard =  ({serverdata}) => {
  let [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getServerStatus(serverdata.address);
        setData(await result.json());
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log(data)


  return (
    <Card className={styles.cardcontents}>
      <h1>Server Name: <span>{serverdata.name}</span></h1>
      <h2>Address: <span>{serverdata.address}</span></h2>
      {data?.online ? (
        
        <>
          <h3>Status: {"Online"}</h3>
          <div className='flex'>
          <h2>{`MOTD: `}</h2>
          <div className='bg-black' dangerouslySetInnerHTML={{ __html: data.motd?.html }}></div>
          
          </div>

          <h2>Minecraft Version: {data.version}</h2>
          
          <h3>Players: {data.players?.online}/{data.players?.max}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button >Stop</Button>
              </TooltipTrigger>
              <TooltipContent className={styles.right}>
                <p>You do not have a privelege to use this feature</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h5>Downloads:</h5>
          <div className='flex'>
            {serverdata.links?.map((l,i) => (
              <Link key={i} href={l.ref} className='text-purple-400 ml-3'>{l.name} </Link>
            ))}
          </div>
        </>
      ):<>
        <h3 className='align-text-bottom'>Status: {"Offline"}</h3> 
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button >Start</Button>
              </TooltipTrigger>
              <TooltipContent className={styles.right}>
                <p>You do not have a privelege to use this feature</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
      </>}
    

    </Card>

  )
}

export default ServerCard