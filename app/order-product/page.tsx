"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router=useRouter();
    const placeOrder=()=>{
        console.log("place order")
        router.forward();
    
    }
    return(
    <>
    <h1>Place your Order </h1>
    <button onClick={placeOrder}>Order</button>
    </>
    )
}