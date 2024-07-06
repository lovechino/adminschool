import { Image, Space, Typography } from "antd"
import "../css/private.css"
import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons"
function AppHeader (){
    return (
        <div className="AppHeader">
            <Image width={40} src="https://i.pinimg.com/564x/d1/b1/1d/d1b11d5e4dbae547ac0d651476cec488.jpg"/>
            <Typography.Title>DashBoard</Typography.Title>
            <Space>
                <ProfileOutlined style={{fontSize:24}}/>
                <LogoutOutlined style={{fontSize:24}}/>
            </Space>
        </div>
    )
}

export default AppHeader