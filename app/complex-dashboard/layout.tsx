"use client"
import { ReactNode, useState } from "react";
import Login from "./@login/page";
export default function DashboardLayout({
    children,
    user,
    revenue,
    notification,
    
  
}:{
children:ReactNode,
user:ReactNode,
revenue:ReactNode,
notification:ReactNode,


}
){
    const[isLoggedIn,setloggedIn]=useState(false);
   
    return isLoggedIn?(
        
        <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}} >
            <div>{user}</div>
            <div>{revenue}</div>
            
        </div>
        <div style={{display:"flex", flex:1}}>{notification}</div>
        </div>
        </div>
    ):(<Login setloggedIn={setloggedIn}/>)

    
}