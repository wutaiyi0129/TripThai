import Link from "next/link";
import Header  from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import HomeMenu from "./components/Layout/HomeMenu";
import SectionHeader from "./components/Layout/SectionHeader";
import Image from "next/image";
import TicketSearchForm from './components/Layout/TicketSearchForm'
export default function Home (){
  
  return(
    <>
<Hero/>
<HomeMenu/>
<h1 className="text-4xl mt-10">走吧！我們出發吧</h1>
<TicketSearchForm/>
<section className="text-center my-16 mt-20">
<SectionHeader subHeader={"介紹"} mainHeader={"我的團隊"} />
<p className="max-w-2xl mx-auto mt-4 text-gray-500 ">
我們團隊的故事始於一次意外的冒險，當時我們一群對清邁深具熱愛的夢想家決定攜手，創建一支專業導遊隊伍。在清邁的街頭巷尾，我們發現了城市的深厚底蘊和獨特之處。這個夢幻的起源激發了我們對文化探索的熱情，成為引領旅客探索清邁之美的不可或缺的夥伴。每一段旅程都是我們故事的一部分，與旅客一同編織屬於我們的精彩篇章。
</p>
</section>
<section className="mx-auto text-center">
<SectionHeader subHeader={'不要猶豫'} mainHeader={'聯繫我們'}/>
<Link className="text-4xl mt-8" href="https://line.me/ti/p/-3AeiJ8AUe">Line</Link>
<Image className="mx-auto" src={'/line.JPG'} width={400} height={400} />
</section>

    </>
  )
}