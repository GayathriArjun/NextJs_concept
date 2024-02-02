
import { notFound } from "next/navigation";

export default function reviewDynmaic({
  params,
}: {
  params: {
    productId: number;
    reviewId: number;
  };
}) 
{
 
  if(params.reviewId>1000){
    notFound()
  }
  return (
    <>
    <h1> welcome to nested Dynamic </h1>
    <h3>product id {params.productId}</h3>
    <h3>review id {params.reviewId}</h3>
    </>
  );
}
