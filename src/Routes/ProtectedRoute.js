import { Routes,Route } from "react-router-dom"

const ProtectedRoute = (props)=>{
   const tk = localStorage.getItem("TOKEN")
    // return(
    //   <>
    //      {props.children}
    //   </>
    // )
    if(tk){
      return(
        <>
          {props.children}
        </>
      )
    }else{
      return(
        <>
          You don't have any per
        </>
      )
    }
}

export default ProtectedRoute