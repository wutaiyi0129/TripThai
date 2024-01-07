"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link";
import {signIn} from "next-auth/react";
export default function RegisterPage(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [creatingUser,setCreatingUser]=useState(false)
    const [userCreated,setUserCreated]=useState(false)
    const [error, setError] =useState(false)
     async function handleFormSubmit(ev){
        ev.preventDefault()
        setCreatingUser(true)
        try{

            await fetch('/api/register',{     
                method:'POST',
                body:JSON.stringify({email,password,callbackUrl:'/'}),
                headers:{'Content-Type':'application/json'},
            })
            setCreatingUser(false)
            setUserCreated(true)
        }catch(e){
        setError(error)
        }
    }
    
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-8">註冊</h1>
            {userCreated&&(<div className="text-center text-4xl">已創立使用者<br/>您現在已經可以<Link className="underline" href={'/login'}>登入</Link></div>)}
            {error&&(<div className="my-4 text-center">錯誤！請稍等再試</div>)}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)} disabled={creatingUser}></input>
                <input type="password" placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)} disabled={creatingUser}></input>
                <button type="submit">註冊</button>
                <div className="my-4 text-center  text-gray-800">使用其他方式登入
            </div>
                <button type="button" onClick={()=>signIn('google')} className="flex gap-4 justify-center content-center" disabled={creatingUser}>
                   <Image src={'/google-icon.png'} alt={''} width={24} height={24}/> 使用Google 登入</button>
            </form>
         
        </section>
    )
}