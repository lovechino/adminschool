import { Button, Form, Input, Typography } from "antd"
import "../css/Login.css"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { LogIn } from "../API/Log"

const Login = ()=>{
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const log = async (data)=>{
       const a = await LogIn({username : data.username,password : data.password})
       if(a?.TOKEN){
        console.log("nice")
        localStorage.setItem("TOKEN",a.TOKEN)
        navigate("/user")
       }else{
        console.log("aaaa")
       }
    }
    return(
        <div className="appBg">
            <Form className="LoginForm" onFinish={log}>
                <Typography.Title>Welcome</Typography.Title>
                <Form.Item 
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    }
                ]}
                label = 'Username'
                 name = {'username'}>
                    <Input placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Item>
                <Form.Item 
                rules={
                    [{
                        required: true,
                        message: "Please input your password!",
                    }]
                }
                label = 'Password'
                 name = {'password'}>
                    <Input.Password placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                </Form.Item>
                <Button type="primary" htmlType="submit" block>Login</Button>
                {/* <Link onClick={()=>log()}>aaaaa</Link> */}
            </Form>
        </div>
    )
}

export default Login