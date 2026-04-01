import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPizzaSlice,
    faLock,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
    const total = 25000;
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Pizzeria Mamma Mia!
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant="outline-secondary" className="me-2">
                            <Nav.Link as={Link} to="/">
                                <FontAwesomeIcon icon={faPizzaSlice} /> Home
                            </Nav.Link>
                        </Button>

                        <Button variant="outline-secondary" className="me-2">
                            <Nav.Link as={Link} to="/register">
                                <FontAwesomeIcon icon={faLock} /> Register
                            </Nav.Link>
                        </Button>
                        
                        <Button variant="outline-secondary" className="me-2">
                            <Nav.Link as={Link} to="/login">
                                <FontAwesomeIcon icon={faLock} /> Login
                            </Nav.Link>
                        </Button>

                        <Button variant="outline-secondary" className="me-2">
                            <Nav.Link as={Link} to="/profile">
                                <FontAwesomeIcon icon={faLock} /> Profile
                            </Nav.Link>
                        </Button>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/cart">
                            <Button variant="outline-info" className="me-2">
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="me-1"
                                />
                                Total: ${total}
                            </Button>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NavbarComponent;
