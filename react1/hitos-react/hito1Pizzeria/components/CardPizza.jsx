import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faEye, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CardPizza = ({ name, price, ingredients, img }) => {
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
                <Card.Text>Ingredientes:</Card.Text>
                <Card.Text style={{ fontSize: "11px" }}>
                    <FontAwesomeIcon icon={faPizzaSlice} />
                    {ingredients.join(", ")}
                </Card.Text>
                <hr />
                <Card.Text className="justify-content-center d-flex">
                    <h3>Precio: ${price}</h3>
                </Card.Text>
                <Button variant="dark" size="sm" className="ms-4">
                    Ver más
                    <FontAwesomeIcon icon={faEye} className="ms-1" />
                </Button>
                <Button variant="success" size="sm" className="ms-5">
                    Comprar
                    <FontAwesomeIcon icon={faShoppingCart} className="ms-1" />
                </Button>
            </Card.Body>
        </Card>
    );
};
export default CardPizza;
