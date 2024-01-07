import Image from "next/image"
import MyMap from '/Users/tony/Desktop/food-order/src/app/components/Layout/MyMap.js'
export default function IntroducePage(){
    return(
        <div className="text-center mt-10">
        <h1 className="text-4xl">清邁介紹</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <div className="flex justify-center items-center">
            <Image src="/locate.webp" width={500} height={500} className="rounded-full" />
          </div>
          <div className="mt-6 md:mt-0 lg:mt-0 md:pl-6 lg:pl-6">
            泰國清邁位於曼谷北方海拔305米的山谷中，有“北方玫瑰”之稱，這裏山清水秀景色絕美，手工藝品名聞全國，是泰國北部政治、經濟、文化教育中心，也是泰國第二大城市。清邁府總面積20107平方公里，人口150萬人，行政區域分為22個區。首府清邁市城區面積達40平方公里。
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <div className="md:pr-6 lg:pr-6">
            城中間東西向的Ratchadamnoen Rd.是清邁城內的主幹道，東側盡頭就是塔佩門Tha Pae Gate，西側盡頭是帕辛寺（Wat Phar Sing），圖上畫出來的都是路（Road），其余的都是巷（Soi/Lane），城內三大寺廟：清曼寺（Wat Chiang Man） - 位於城東北契迪龍寺（wat chedi luang） - 位於古城中心;帕辛寺（Wat Phra Singh）， - 位於城西
          </div>
          <div className="flex justify-center items-center">
            <Image src="/town.jpeg" width={500} height={500} className="rounded-full" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">如無法顯示可能是因為API請求已超過使用限制，再超過要付錢｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡ 請見諒</h1>
            <MyMap/>
        </div>
      </div>
    )
}