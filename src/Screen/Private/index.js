import { Space } from "antd"
import AppHeader from "./AppHeader"
import SideMenu from "./SideMenu"
import PageContent from "./PageContent"
import AppFooter from "./AppFooter"
import "./css/private.css"


function PrivateContext(){
    return(
        <div className="App">
            <AppHeader/>
            <Space className="SideMenuAndPageContent">
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </Space>
            <AppFooter/>
        </div>
    )
}

export default PrivateContext