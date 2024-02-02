import { Metadata } from "next";
import { title } from "process";

// type props={
//     params:{
//         productId:number,
//     }
// }


// export const generateMetadhata=async ({params}:props):Promise<Metadata>=>{
//  const title=await new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`Iphone ${params.productId}`)
//         },100)
//     })
//     return {
//         title:`product ${title}`
//     }
// }
export default function Dynamicroute({
  params,
}: {
  params: { productId: number };
}) {
  return (
    params.productId < 50 && (
      <h1>welcome to Dynamic route {params.productId}</h1>
    )
  );
}
