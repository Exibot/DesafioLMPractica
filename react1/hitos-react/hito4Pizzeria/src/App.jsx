import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import CardPizza from "../components/CardPizza";
import Container from "react-bootstrap/esm/Container";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import { pizzas } from "./pizzas.js";
import Cart from "../components/Cart.jsx";
import {pizzaCart} from "./pizzas.js";
import Pizza from "../components/Pizza.jsx";

function App() {
    return (
        <>
            <Container fluid>
                <NavbarComponent />
                <Home />
                {/* <div className="d-flex justify-content-center gap-4 flex-wrap my-4">
                {
                pizzas.map((pizza, index) => (
                    <CardPizza
                        key={index}
                        desc={pizza.desc}
                        id={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
                </div> */}
                {/* <Cart pizzaCart={pizzaCart} /> */}
                {/* <RegisterPage /> */}
                {/*<LoginPage />*/}
                <Pizza />
                <Footer />
            </Container>
        </>
    );
}

export default App;
