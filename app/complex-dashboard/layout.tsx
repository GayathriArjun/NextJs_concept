import { ReactNode, useState } from "react";

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
   
    return(
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
    )
    
}