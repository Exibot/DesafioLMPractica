import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { pizzaCart } from "../pizzas";

function Cart() {
    const [carrito, setCarrito] = useState(pizzaCart);
    const formatoCL = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    });

    return (
        <>
            <Container className="my-5" style={{ maxWidth: "600px" }}>
                <h2>Detalles del pedido</h2>

                {carrito.map((pizza, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                        <Image
                            src={pizza.img}
                            alt={pizza.name}
                            width="100"
                            rounded
                        />
                        <div className="ms-3">
                            <h4>{pizza.name}</h4>
                            <p>Precio: {formatoCL.format(pizza.price)}</p>
                            <div className="d-flex align-items-center">
                                <Button
                                    variant="outline-danger"
                                    onClick={() => {
                                        const newCarrito = [...carrito];
                                        if (newCarrito[index].count > 0) {
                                            newCarrito[index].count -= 1;
                                        }
                                        setCarrito(newCarrito);
                                    }}
                                >
                                    {" "}
                                    -{" "}
                                </Button>
                                <span className="mx-3">
                                    Cantidad: {pizza.count}
                                </span>
                                <Button
                                    variant="outline-success"
                                    onClick={() => {
                                        const newCarrito = [...carrito];
                                        newCarrito[index].count += 1;
                                        setCarrito(newCarrito);
                                    }}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
                <h3>
                    Total a pagar:{" "}
                    {formatoCL.format(
                        carrito.reduce(
                            (total, pizza) => total + pizza.price * pizza.count,
                            0,
                        ),
                    )}
                </h3>
                <button className="btn btn-primary mt-2">Pagar</button>
            </Container>
        </>
    );
}
export default Cart;
