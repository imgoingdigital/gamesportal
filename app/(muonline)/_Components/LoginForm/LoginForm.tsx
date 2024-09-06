"use client"
import React, { useEffect, useState } from 'react'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'


const LoginForm = () => {
  const {status} = useSession();
  const router = useRouter();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() =>{
    if(status === 'authenticated'){
      router.refresh
      router.push("./")
      
    }

  },[status])
  const handleSubmit = async () => {
    setMessage('Signing In...')
    try {
      const signInResponse = await signIn('credentials', {
        account,
        password,
        redirect: false,
      })

      console.log(signInResponse.ok)


      if(!signInResponse.ok){
        setMessage("Account or Password is Invalid")
      } else {
        
        router.refresh
      }
    } catch (error) {
      console.log(error)
    }
    



    //const message = await Login(userName, password)
  }

  return (
    <div>
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your username and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account">Account</Label>
            <Input id="account" type="string" placeholder="username" required onChange={(e) =>{
              setAccount(e.target.value)
            }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required  onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </CardContent>
      <p className='text-center'>{message}</p>
      <p className='text-center text-sm text-gray-600 mt-2'>
        Don&apos;t have an account?, please register &nbsp;
        <Link className='text-blue-500 hover:underline' href='/mu/register'>
          HERE 
        </Link>
      </p>
    </Card>
    </div>
  )
}

export default LoginForm