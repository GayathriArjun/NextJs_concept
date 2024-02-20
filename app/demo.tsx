"use client"
import { useState } from "react"
export default function Demo(){
    const [count,setCount]=useState(0)
    const incrementCount=()=>{
        setCount(count+1)
    }
    return(
        <>
        <button onClick={incrementCount}>Increment</button>
        <h1>Count-{count}</h1>
        </>

    )
}