'use client';
import Image from "next/image"
import Right from "../icons/Right"
import Carousel  from "./Carousel";
export default function Hero(){
   return(
   
    <section className="hero grid grid-cols-2" >
        <div className="py-16 w-full">
        <h1 className="text-6xl font-semibold">
清邁<br></br>尋境<span className="text-primary">   Bagel</span>同行</h1>
        <p className="my-6 text-gray-500">
貝果旅行，清邁探險新視界。專業包車、攝影紀錄，泰語翻譯貼心服務，讓您輕鬆品味異國風情。開啟旅程，留下美好回憶，與貝果一同踏上難忘之旅</p>
        <div className="gap-4 flex">
            <button className="bg-primary flex rounded-full text-white gap-2 px-4 py-2 ">立即訂購<Right/></button>
            <button className="flex gap-2 py-2 text-gray-600  font-semibold">瞭解更多<Right/></button>
        </div>
        </div>
        <div className="ml-2" >
          <Carousel/>
        </div>
    </section>

   ) 
}