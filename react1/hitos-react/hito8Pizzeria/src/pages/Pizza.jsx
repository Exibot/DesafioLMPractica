import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Pizza() {
    const [pizza, setPizza] = useState(null);
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        getPizza();
    }, []);

    const getPizza = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/pizzas/${id}`,
            );
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };

    return (
        <>
            <Container className="pt-5 text-center mb-5">
                {pizza ? (
                    <>
                        <h1>{pizza.name}</h1>
                        <img
                            src={pizza.img}
                            alt={pizza.name}
                            style={{ maxWidth: "100%", height: "300px" }}
                        />
                        <p>{pizza.desc}</p>
                        <p>Precio: {pizza.price}</p>
                        <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
                        <Button
                            variant="success"
                            onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img })}
                        >
                            Agregar al carrito
                        </Button>
                    </>
                ) : (
                    <p>Cargando...</p>
                )}
            </Container>
        </>
    );
}

export default Pizza;
