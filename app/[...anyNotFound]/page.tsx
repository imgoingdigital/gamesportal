"use client"
import React from 'react'
import "./fargo.css"
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter()
  const goBack = () =>{
    router.back()
    }
  return (
    <body>
      <div className="content">
        <canvas className="snow" id="snow"></canvas>
        <div className="main-text">
          <h1>Aw jeez.<br/>That page has gone missing.</h1>
          <a className="home-link" href="/">Hitch a ride back home.</a>
          <p>or</p>
          <h4>
            <Button onClick={goBack}>
              Go Back
            </Button>
          </h4>
        </div>
        <div className="ground">
          <div className="mound"> 
            <div className="mound_text">404</div>
            <div className="mound_spade"></div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default page

