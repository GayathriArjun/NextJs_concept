import { Metadata } from "next"
const getRandomNum=(count:number)=>{
    return Math.floor(Math.random()*count);
  
  }

export const metadata:Metadata={
    title:{
        absolute:"first child"
    }
}
export default function FirstBlog()
{
    const random= getRandomNum(2);
    if(random===1){
      throw new Error("Error in review ID");
    }
    return <h1> welcome to blog start first..... </h1>
}