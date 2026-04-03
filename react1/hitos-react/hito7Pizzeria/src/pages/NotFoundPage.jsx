import {Container} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Container className="p-5 text-center">
            <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
        </Container>
    );
}
export default NotFoundPage;