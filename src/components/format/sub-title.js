import Divider from "./divider";


export default function SubTitle({subTitle}) {
    return <div className="sub-title-container">
        <div className="sub-title">
            <h1>{subTitle}</h1>
        </div>
        <Divider />
    </div>
}