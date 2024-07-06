import { Button, Form, Input, Typography } from "antd"
import "../css/Login.css"

const Login = ()=>{
    const log = (data)=>{
        console.log({username : data.username , password : data.password})
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
                    <Input placeholder="username"/>
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
                    <Input.Password placeholder="password"/>
                    
                </Form.Item>
                <Button type="primary" htmlType="submit" block>Login</Button>
            </Form>
        </div>
    )
}

export default Login