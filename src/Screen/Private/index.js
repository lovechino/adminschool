import { Space, Typography } from "antd"
import AppHeader from "./AppHeader"
import SideMenu from "./SideMenu"
import PageContent from "./PageContent"
import AppFooter from "./AppFooter"
import "./css/private.css"


function PrivateContext(){
    const tk = localStorage.getItem("TOKEN")
    console.log(tk)
    return(
        <div className="App">
            <AppHeader/>
            <Space className="SideMenuAndPageContent">
                <SideMenu></SideMenu>
                <Typography.Title>{tk}</Typography.Title>
                <PageContent></PageContent>
            </Space>
            <AppFooter/>
        </div>
    )
}

export default PrivateContext