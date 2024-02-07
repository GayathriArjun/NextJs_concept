import { ReactNode } from "react";

const Card=({children}:{children:ReactNode})=>{
    const cardStyle={
        padding:"100px",
        margin:"10px",
        boxShadow:"5px 3px 8px 3px #888888",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    return <div style={cardStyle}>{children}</div>

}
export default Card