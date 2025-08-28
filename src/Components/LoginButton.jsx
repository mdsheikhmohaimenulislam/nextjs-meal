"use client"
import React from 'react'
import { signIn} from "next-auth/react"


export default function LoginButton() {
  return (
    <div>
      <button className='btn text-center mt-20 mb-20' onClick={() => signIn()}>Login</button>
    </div>
  )
}
