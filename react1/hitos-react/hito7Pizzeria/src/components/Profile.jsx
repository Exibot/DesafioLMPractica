import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Profile = () => {
    const { logout } = useContext(UserContext);
    return (
        <>
            <Container className="p-5 text-center">
                <h1 className="mb-4">Perfil de Usuario</h1>
                <div>Email: usuario@example.com</div>
                <Button variant="danger" className="mt-3" onClick={logout}>
                    Cerrar Sesión
                </Button>
            </Container>
        </>
    );
};
export default Profile;
