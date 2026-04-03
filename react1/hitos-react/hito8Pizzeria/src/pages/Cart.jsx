import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; 
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert"; 

function Cart() {
    const { cart, setCart, addToCart, decreaseFromCart } =
        useContext(CartContext);
    const { token } = useContext(UserContext); 
    const [mensajeExito, setMensajeExito] = useState("");

    const formatoCL = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    });

    const total = cart
        .map((item) => item.price * item.count)
        .reduce((acc, price) => acc + price, 0);

    const handleCheckout = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/checkouts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, 
                    },
                    body: JSON.stringify({ cart }),
                },
            );

            if (response.ok) {
                setMensajeExito("¡Compra realizada con éxito!");
                setCart([]);
            } else {
                alert("Hubo un problema procesando tu compra.");
            }
        } catch (error) {
            console.error("Error en checkout:", error);
        }
    };

    return (
        <Container className="my-5" style={{ maxWidth: "600px" }}>
            <h2>Detalles del pedido</h2>

            {mensajeExito && (
                <Alert variant="success" className="mt-3">
                    {mensajeExito}
                </Alert>
            )}

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
                                -
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

            <h3 className="mt-4">Total a pagar: {formatoCL.format(total)}</h3>
            <Button
                variant="primary"
                className="mt-2"
                disabled={!token || cart.length === 0}
                onClick={handleCheckout}
            >
                Pagar
            </Button>
        </Container>
    );
}
export default Cart;
