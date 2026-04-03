import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPizzaSlice,
    faEye,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const CardPizza = ({ desc, id, name, price, ingredients, img }) => {
    const { addToCart } = useContext(CartContext);
    const formatoCL = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    });
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={img}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>Pizza {name}</Card.Title>
                <hr />
                <Card.Text>
                    {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
                </Card.Text>
                <hr />
                <Card.Text>Ingredientes:</Card.Text>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li style={{ listStyle: "none" }} key={index}>
                            <FontAwesomeIcon icon={faPizzaSlice} /> {ingredient}
                        </li>
                    ))}
                </ul>
                <hr />
                <Card.Text className="justify-content-center d-flex">
                    <h3>Precio: {formatoCL.format(price)}</h3>
                </Card.Text>
                <Button
                    variant="dark"
                    size="sm"
                    className="ms-4"
                    as={Link}
                    to={`/pizza/${id}`}
                >
                    Ver más
                    <FontAwesomeIcon icon={faEye} className="ms-1" />
                </Button>
                <Button
                    variant="success"
                    size="sm"
                    className="ms-5"
                    onClick={() => {
                        addToCart({ id, name, price, img });
                    }}
                >
                    Comprar
                    <FontAwesomeIcon icon={faShoppingCart} className="ms-1" />
                </Button>
            </Card.Body>
        </Card>
    );
};
export default CardPizza;
