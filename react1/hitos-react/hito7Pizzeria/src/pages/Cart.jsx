import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function Cart() {
    const { token } = useContext(CartContext);
    const { cart, setCart, addToCart, decreaseFromCart } =
        useContext(CartContext);
    const formatoCL = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    });

    const total = cart
        .map((item) => item.price * item.count)
        .reduce((acc, price) => acc + price, 0);

    return (
        <>
            <Container className="my-5" style={{ maxWidth: "600px" }}>
                <h2>Detalles del pedido</h2>

                {cart.map((pizza, index) => (
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
                                    onClick={() => decreaseFromCart(pizza)}
                                >
                                    {" "}
                                    -{" "}
                                </Button>
                                <span className="mx-3">
                                    Cantidad: {pizza.count}
                                </span>
                                <Button
                                    variant="outline-success"
                                    onClick={() => addToCart(pizza)}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
                <h3>Total a pagar: {formatoCL.format(total)}</h3>
                <button className="btn btn-primary mt-2" disabled={!token}>Pagar</button>
            </Container>
        </>
    );
}
export default Cart;
