"use client"
import React from 'react'
import styles from "./index.module.scss"
import { Card } from '@/components/ui/card'
import { getServerStatus } from '../../_utils'

import { useState, useEffect } from 'react'
const ServerCard =  ({serverdata}) => {
  let [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await (await getServerStatus(serverdata.address)).json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [serverdata]);


  // const  data =   getServerStatus(serverdata.address)
  
  console.log(data)
  return (
    <Card className={styles.cardcontents}>
    <h1>Server Name: <span>{serverdata.name}</span></h1>
    <h2>Address: <span>{serverdata.address}</span></h2>
    <h3>Status: {data?.online ? "Online" : "Offline"}</h3> 

    {data?.online ? (
      <>
        <h2>MOTD: <span>{data.motd?.raw}</span></h2>
        <h2>Minecraft Version: {data.version}</h2>
        
        <h3>Players: {data.players?.online}/{data.players?.max}</h3>
      </>
    ):<></>}
    

  </Card>

  )
}

export default ServerCard