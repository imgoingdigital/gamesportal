'use client'
import React from 'react'

import { SessionProvider } from "next-auth/react";
// import { CartProvider } from '../_providers/Cart'
// import { FilterProvider } from './Filter'
// import { ThemeProvider } from './Theme'

interface ProviderProps{
  children: React.ReactNode | React.ReactNode[]
}

export const Provider = ({children}: ProviderProps) =>{

  return(
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

