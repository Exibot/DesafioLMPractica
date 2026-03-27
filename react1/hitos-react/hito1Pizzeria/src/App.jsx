import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import CardPizza from "../components/CardPizza";
import Container from "react-bootstrap/esm/Container";

function App() {
    return (
        <>
            <Container fluid>
                <NavbarComponent />
                <Home />
                <div className="d-flex justify-content-center gap-4 flex-wrap my-4">
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img= "/img/PizzaNapolitana.jpg"
                />
                <CardPizza
                    name="Española"
                    price={6950}
                    ingredients={[
                        "mozzarella",
                        "gorgonzola",
                        "parmesano",
                        "provolone",
                    ]}
                    img="/img/PizzaEspaniola.avif"
                />
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="/img/PizzaPepperoni.jpg"
                />
                </div>
                <Footer />
            </Container>
        </>
    );
}

export default App;
