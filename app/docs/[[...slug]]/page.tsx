export default function Docs({params}:{
    params:{
        slug:string[],
    }
    
}){
    if(params.slug?.length===1){
        return <h1>review value {params.slug[0]}</h1>
    }
    else if(params.slug?.length===2){
        return <h1>concept value {params.slug[1]}</h1>
    }
    else
    return <h1>docsment home page</h1>
}
   
   
       
    
