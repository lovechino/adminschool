import { Route, Router, Routes } from "react-router-dom"
import Login from "../Screen/Login"
import PrivateContext from "../Screen/Private"
import ProtectedRoute from "./ProtectedRoute"
function Routing(){
    const isLog = localStorage.getItem("loggedIn")
    console.log(isLog)
    return(
           <>
            <Routes>
                 <Route path="/" element = {<Login/>}/>
                 <Route 
                   path="/user"
                   element = {
                    <ProtectedRoute>
                        <PrivateContext/>
                    </ProtectedRoute>
                   }
                 />
            </Routes>
           </>
       
    )
    
}
export default Routing