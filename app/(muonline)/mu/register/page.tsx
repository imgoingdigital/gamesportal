"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'
import React, { useEffect, useReducer, useState } from 'react'
import RegisterForm from '../../_Components/RegisterForm/RegisterForm'

const page = () => {
  return (
    <div className='main'>
      <RegisterForm></RegisterForm>
    </div>
)}

export default page