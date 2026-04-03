import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";


function Home() {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas();
    }, []);

    const getPizzas = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pizzas");
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };


    return (
        <Container className="pt-5 text-center mb-5">
            <h1>Bienvenido a la Pizzería Mamma Mia</h1>
            <p>
                ¡Disfruta de nuestras deliciosas pizzas artesanales hechas con
                ingredientes frescos y de alta calidad!
            </p>

            <h2 className="mt-5">Nuestras Pizzas</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="m-3">
                        <CardPizza {...pizza} />
                    </div>
                ))}
            </div>
            
                    
        </Container>
    );
}
export default Home;
