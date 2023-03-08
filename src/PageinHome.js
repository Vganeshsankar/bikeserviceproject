import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Image.css'



export const Homepage=()=>{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" className="">Zealous <TwoWheelerSharpIcon></TwoWheelerSharpIcon> Servicecenter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-5">   
                        <NavDropdown title="BikeDetails" id="basic-nav-dropdown">
                        <NavDropdown.Item href="createbikedetails">Create</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ServiceDetails" id="basic-nav-dropdown" className="ms-5">
                        <NavDropdown.Item href="createservicedetail">
                            Create
                        </NavDropdown.Item>
                        <NavDropdown.Item href="listallservicedetails">ListAll</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 " onClick={()=>
                        {
                            sessionStorage.removeItem("auth");
                            window.location.assign("/")
                        }}>
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    )
}
