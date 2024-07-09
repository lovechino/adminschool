import axios from "axios"

const url = "http://localhost:8001/api"

const LogIn =  async(data)=>{
    const result = await axios.post(`${url}/user/login`,data).then(res=>res?.data).catch(err=>console.log(err))
    return result
}

export {
    LogIn
}