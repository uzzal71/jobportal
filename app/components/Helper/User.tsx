'use client'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

interface Props {
    session: Session
}

const User = ({ session }: Props) => {
  return (
    <div onClick={() => signOut({callbackUrl: `${process.env.NEXT_PUBLIC_URL}`})} className="cursor-pointer">
        <Image 
          src={`${session?.user?.image}`} 
          alt="user" 
          width={50} 
          height={50} 
          className="w-[50px] h-[50px] rounded-full"
        />
    </div>
  )
}

export default User
