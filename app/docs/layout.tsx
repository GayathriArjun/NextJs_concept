import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata:Metadata={
    title:{
        default:"next js- Metadata title object",
        template:" %s template metadata "

    }
}
const Metalayout=({children}:{
    children:ReactNode})=>{
    return(
        <div>
            {children}
            <h1>blog layout</h1>
        </div>
    )

}
export default Metalayout; 

