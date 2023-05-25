import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const TermOfService = () => {
    const navigate = useNavigate () 

    const hancleClick = () =>{
        navigate('../')
    }
    
    return (
    <div>
        <h3>Term Of Service</h3>
        <Button variant="dark" onClick={hancleClick}>Klik Menuju Home</Button>
    </div>
    )
}
export default TermOfService