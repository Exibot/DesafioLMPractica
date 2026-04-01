import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Profile = () => {
    return (
        <>
            <Container className="p-5 text-center">
                <h1 className="mb-4">Perfil de Usuario</h1>
                <div>Email: usuario@example.com</div>
                <Button variant="danger" className="mt-3">
                    Cerrar Sesión
                </Button>
            </Container>
        </>
    );
};
export default Profile;
