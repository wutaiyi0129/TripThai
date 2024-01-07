"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { signOut } from 'next-auth/react';
export default function Header(){
  const session = useSession()
  const status = session?.status
    return(

        <>
    <header className="flex items-center justify-between">
      
     
      <nav className="flex  items-center gap-6 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl" href={''}>
      貝果旅行社
      </Link>
    <Link href={'/'}>首頁</Link>
    <Link href={'/introduce'}>清邁介紹</Link>
    <Link href={'https://porfolio-c20zhbn53-wutaiyi0129s-projects.vercel.app'}>關於我</Link>
  
      </nav>
      <nav className="flex items-center gap-8 text-gray-800">
        {status === 'authenticated'&& (
                <button onClick={()=>signOut()} className="bg-red-500 rounded-full text-black px-4 py-2" >登出</button>
        )}
        {status === 'unauthenticated'&&(
          <>
          <Link href={'/login'}>登入</Link>
      <Link className="bg-red-500 rounded-full text-black px-4 py-2" href={'/register'}>註冊</Link>
          </>  
        )}
      </nav>
    </header>
    </>
      )
}