export default function SectionHeader({subHeader,mainHeader}){
    return(
        <>
         <h3 className="text-gray-600 font-semibold leading-3 text-4xl my-5">{subHeader}</h3>
        <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
        
        </>
    )
}