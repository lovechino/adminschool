import { Route, Router, Routes } from "react-router-dom"
import Login from "../Screen/Login"
import PrivateContext from "../Screen/Private"
function Routing(){
    const isLog = window.localStorage.getItem("loggedIn")
    return(
            <Routes>
                {/* <Route path="/" element = {<Login/>}/>
                <Route path="/user" element ={ <PrivateContext/>}/>   
                      */}
             {
                isLog !== true ? (
                    <>
                      <Route path="/" element = {<Login/>}/>
                    </>
                ) :
            (
                <>
                     <Route path="/user" element = {<PrivateContext/>}/>
                </>
            )
             }
            </Routes>
       
    )
    
}
export default Routing