import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function LoginPage() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensajeError, setMensajeError] = useState("");
    const [loading, setLoading] = useState(false);

    const validarFormulario = async (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setMensajeError("El email es obligatorio");
            return;
        }

        if (password.trim() === "") {
            setMensajeError("La contraseña es obligatoria");
            return;
        }

        if (password.length < 6) {
            setMensajeError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        try {
            setMensajeError("");
            setLoading(true);

            await login({ email, password });

            setEmail("");
            setPassword("");
            navigate("/profile");
        } catch (error) {
            setMensajeError(error.message || "Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Stack gap={3} className="col-md-5 mx-auto mt-4">
            <h1>Login</h1>

            <Form onSubmit={validarFormulario}>
                {mensajeError && <Alert variant="danger">{mensajeError}</Alert>}

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? "Ingresando..." : "Login"}
                </Button>
            </Form>
        </Stack>
    );
}

export default LoginPage;
