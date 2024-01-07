"use client"

import { useState } from "react"
import Image from "next/image"
import {signIn} from "next-auth/react";
export default function LoginPage(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loginInProgress,setLoginInProgress]=useState(false)
    async function handleFormSubmit(ev){
        ev.preventDefault()
        setLoginInProgress(true)
        //使用callbackURL 來設定登入成功後的網址跳轉
        await signIn('credentials',{email,password,callbackUrl:'/'})
        setLoginInProgress(false)
    }
    return(
        <section className="mt-8">
<h1 className="text-center text-primary text-4xl mb-8">登入</h1>
<form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="text" name="email" placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)} disabled={loginInProgress}></input>
                <input type="password" name="password" placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)} disabled={loginInProgress}></input>
    <button type="submit" disabled={loginInProgress}>登入</button>     
    <div className="my-4 text-center  text-gray-800">使用其他方式登入
            </div>  
    <button type="button" onClick={()=>signIn('google')} className="flex gap-4 justify-center content-center" >
                   <Image src={'/google-icon.png'} alt={''} width={24} height={24}/> 使用Google 登入</button> 
            </form>
        </section>
    )
}