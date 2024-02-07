
"use client"
import Card from "@/app/components/card";
import { useState } from "react";
export default function Login({setloggedIn}:{setloggedIn:any}){
    
    
    const submitLogin=()=>{
        setloggedIn(true);

    }

    return <Card><h1>Please Login to continue </h1>

    <button onClick={submitLogin}>Login</button>
    
    </Card>
}