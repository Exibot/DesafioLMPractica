import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../src/Header.css";
const Header = () => {
    return (
        <div className="header-bg">
            <div className="overlay">
                <Container className="header-content">
                    <h1>¡Pizzería Mamma Mia!</h1>
                    <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
                    <hr />
                </Container>
            </div>
        </div>
    );
};
export default Header;
