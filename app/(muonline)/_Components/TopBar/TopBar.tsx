"use client"
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

const TopBar = () => {
  const { data: session, status } = useSession()
  if(!session){
    return (
      <div className='global-top-bar'>
        <div className='global-top-bar-content'>
          <div className="col-xs-6 text-right global-top-bar-nopadding">
            <Link href="/mu/register/">Register</Link>
            <span className="global-top-bar-separator">|</span>
            <Link href="/mu/login/">Log In</Link>
          </div>
        </div>
      </div>
  )}
  else{
    return(
      <div className='global-top-bar'>
        <div className='global-top-bar-content'>
          <div className="col-xs-6 text-right global-top-bar-nopadding">
            <Link href="/mu/register/">Register</Link>
            <span className="global-top-bar-separator">|</span>
            <Link href="/mu/logout/" className='logout'>Log Out</Link>
          </div>
        </div>
      </div>
    )
  }
  
}

export default TopBar