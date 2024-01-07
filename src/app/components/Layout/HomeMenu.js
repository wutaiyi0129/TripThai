"use client"
import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeader from "./SectionHeader"
import {MenuInfo} from '/Users/tony/Desktop/food-order/src/app/MenuInfo.js'
export default function HomeMenu(){
const list =[]
    return(
        <section>
<div className="absolute left-0 right-0 w-full justify-start">
    <div className="h-48 width-48 absolute left-0 -z-20 ">
    <Image height={300} width={300}
           src={'/greengod.png'} objectFit="contain" />
          </div>
          <div className="h-48 width-48 absolute right-0 -z-20 ">
    <Image height={300} width={300}
           src={'/redgod.jpg'} objectFit="contain" />
          </div>
</div>
        <div className="text-center">
       <SectionHeader subHeader={"查看"} mainHeader={"行程總覽"}/>
        </div>
        <div className="grid grid-cols-3 gap-4">
  {MenuInfo.map(item=>(
    <MenuItem  {...item} key={item.name} />
 ))}
     </div>
        </section>
   
    )
}