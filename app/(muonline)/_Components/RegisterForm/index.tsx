"use client"
// import "@/styles/main.css";
import React, { useEffect, useReducer, useState } from 'react'
// import SignUpForm from '@/components/Sign-In-Form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { hashPassword } from '@/lib'
import { signUp } from '@/app/(muonline)/_Actions/accounts'
import { string } from 'zod'
// import { signUp } from '@/app/actions/users/signup'

const index = () => {
  const router = useRouter();
  const {status} = useSession();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = async () => {
    const passwordhash = hashPassword(`${userName}:${password}`)
    // setPassword(hashPassword(`${userName}:${password}`))
    
    setMessage('Signing Up...')
    const message = await signUp(userName, email,password)
    setMessage(message);
    
  }


  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Registration</CardTitle>
        <CardDescription>Register Game Account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account">Account</Label>
            <Input id="account" type="string" placeholder="username" required onChange={(e)=> setUserName(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email Address" required onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordConfirm">Confirm Password</Label>
            <Input id="passwordConfirm" type="password" required />
          </div>
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Register
          </Button>
        </div>
      </CardContent>
      <p>{message}</p>
      <p className='text-center text-sm text-gray-600 mt-2'>
        Already have an account? <br/> Login &nbsp;
        <Link className='text-blue-500 hover:underline' href='/mu/login'>
          HERE 
        </Link>
      </p>
    </Card>
  )
}

export default index