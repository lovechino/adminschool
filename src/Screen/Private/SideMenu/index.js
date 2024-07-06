import { Menu } from "antd"
import "../css/private.css"
import { AppstoreAddOutlined, TeamOutlined } from "@ant-design/icons"
const SideMenu = ()=>{
    return(
        <div className="SideMenu">
            <Menu
            onClick={(item)=>{

            }}
            items={[
                {
                    label :'Dashboard',
                    key: '/',
                    icon : <AppstoreAddOutlined/>
                },
                {
                    label:'Student',
                    key:'/student',
                    icon: <TeamOutlined/>
                },
                {
                    label:'Teacher',
                    key:'/teacher',
                    icon: <TeamOutlined/>
                }
            ]}
            >
            </Menu>
        </div>
    )
}

export default SideMenu