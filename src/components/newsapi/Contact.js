import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export const ContactPage = () => {
const navigate = useNavigate () 

    const hancleClick = () =>{
        navigate('../')
    }

    
    return (
        <div>
            <h3>Halaman Contact</h3>
       <Button variant= "dark "onClick={hancleClick}>Klik Menuju Home</Button>
       </div>
       
    )
}

