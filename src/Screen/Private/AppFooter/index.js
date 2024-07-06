import { Typography } from "antd"
import "../css/private.css"
function AppFooter (){
    return (
        <div className="AppFooter">
            <Typography.Link href="">aaaa</Typography.Link>
            <Typography.Link href="https://ant.design/components/icon" target={'_blank'}>Policy</Typography.Link>
            <Typography.Link href="" target={'_blank'}>Terms of use</Typography.Link>
        </div>
    )
}

export default AppFooter