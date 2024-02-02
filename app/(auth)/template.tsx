"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
import { useState } from "react";

export default function AuthLayout({ children }: { children: React.ReactDOM }) {
  const layoutLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];
  const pathName=usePathname();
  const[input,setInput]=useState("")
  return (
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      {layoutLinks.map((link) =>
      
      {
        const isActive= pathName.startsWith(link.href)
       
       return (
       <>
       <Link href={link.href} key={link.name} className={isActive?"apply":"inactive"}>
          {link.name}
        </Link>
      
       </>
       


       )
      }
        
    )}
    <h1> input state value-{input}</h1>
      {children}
    </>
  );
}
