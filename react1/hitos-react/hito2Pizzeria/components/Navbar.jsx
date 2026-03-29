import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPizzaSlice,
    faLock,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
    const total = 25000;
    const [token, setToken] = useState(false);
    const login = () => {
        setToken(true);
    };
    const logout = () => {
        setToken(false);
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
                <Nav className="me-auto">
                    <Button variant="outline-secondary" className="me-2">
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faPizzaSlice} /> Home
                        </Nav.Link>
                    </Button>

                    {token ? (
                        <>
                            <Button
                                variant="outline-secondary"
                                className="me-2"
                            >
                                <Nav.Link href="#menu">
                                    <FontAwesomeIcon icon={faLock} /> Profile
                                </Nav.Link>
                            </Button>
                            <Button
                                variant="outline-secondary"
                                className="me-2"
                                onClick={logout}
                            >
                                <Nav.Link href="#contact">
                                    <FontAwesomeIcon icon={faLock} /> Logout
                                </Nav.Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="outline-secondary"
                                className="me-2"
                                onClick={login}
                            >
                                <Nav.Link href="#menu">
                                    <FontAwesomeIcon icon={faLock} /> Login
                                </Nav.Link>
                            </Button>
                            <Button
                                variant="outline-secondary"
                                className="me-2"
                            >
                                <Nav.Link href="#contact">
                                    <FontAwesomeIcon icon={faLock} /> Register
                                </Nav.Link>
                            </Button>
                        </>
                    )}
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="outline-info" className="me-2">
                            <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                            Total: ${total}
                        </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavbarComponent;
