import { ReactNode } from "react"

export default  function ProductLayout(
    {children}:{
        children:ReactNode
    }
){
    return(
        <>
        <h1>{children}</h1>
        <footer>
            <h1>hi from auth layout</h1>
        </footer>
        </>
    )

}