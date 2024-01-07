import Image from "next/image"
export default function MenuItem({image,name,description}){
    return(

        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white shadow-2xl transition-all hover:shadow-md">
            <div className="text-center min-h-[50%] align-center">

            <Image src={image}  alt={name} height={180} width={240}  className="w-full h-full object-cover "/>
            </div>
            <h4 className="font-semibold my-3 font-bold text-3xl">{name}</h4>
            <p className="text-gray-700 text-sm ">
            {description}
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-20 py-2">選取</button>
        </div>

  
    )
}