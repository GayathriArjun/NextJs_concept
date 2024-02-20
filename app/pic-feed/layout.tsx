
"use client"
import Image from "next/image"
import nature1 from "../pictures/nature1.jpg"
import nature2 from '../pictures/nature2.jpg'
import nature3 from '../pictures/nature3.jpg'
import nature4 from '../pictures/nature4.jpg'
import nature5 from '../pictures/nature5.jpg'
import nature6 from '../pictures/nature6.jpg'
import DynamicPictureID from "./[id]/page"
import Link from "next/link"
import { ReactNode } from "react";
import { useRouter } from "next/navigation"


export default function DashboardLayout({
    
    
  
}:{ 


}
){
    const pictureFeed=[nature1,nature2,nature3,nature4,nature5,nature6]
    const router=useRouter()
    
    return(

        <>
        {pictureFeed.map((item,index)=>
         <Image src={item} width={350} height={300} alt="nature pic" key={index} style={{marginLeft:50,marginBottom:50}} onClick={()=>router.push(`/pic-feed/${index+1}`)}/>  

        )}
        
        
        

    
        </>
    )
    
}