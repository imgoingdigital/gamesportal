"use client"
import { Blocks } from 'lucide-react'
import React, { useEffect } from 'react'

type AdBannerTypes = {
  dataAdSlot: string,
  dataAdFormat: string,
  dataFullWidthResponsive: boolean
}
const Adbanner = ({dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})      
    } catch (error) {
      console.log(error)
    }

  },[])
  return (
    <ins className='adsbygoogle' 
    style={{display:'block'}} 
    data-ad-client="ca-pub-6919811732951558"
    data-ad-slot={dataAdSlot}
    data-ad-format={dataAdFormat}
    data-full-width-responsive={dataFullWidthResponsive.toString()} >

    </ins>
  )
}

export default Adbanner