import Card from "react-bootstrap/Card";
import MyButton from "./Boton";

const MyCard = ({image, title, colorButton, textButton}) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    _ 29 www.desafiolatam.com up the bulk of the card's content.
                </Card.Text>
                <MyButton color={colorButton} text={textButton} />
            </Card.Body>
        </Card>
    );
};

export default MyCard;
