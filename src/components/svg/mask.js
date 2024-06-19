export default function Mask(props) {
    return ( // viewBox="0 0 1920 100" 
        <svg 
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            
            style={{ width: "100%", height: "100px" }} 
            {...props}>
            <polygon points="0,100 0,0 1920,100 " fill="#fff"/>
        </svg>
    )
}