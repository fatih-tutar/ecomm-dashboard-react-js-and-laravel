import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        navigate("/register")
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">E-Comm </Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    { 
                        localStorage.getItem('user-info') 
                        ? 
                        <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Products</Link>
                            <Link to="/update">Update Products</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }                
                </Nav>
                { 
                    localStorage.getItem('user-info') 
                    ?
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : 
                    null
                }
            </Container>
        </Navbar>
        </div>
    )
}

export default Header  