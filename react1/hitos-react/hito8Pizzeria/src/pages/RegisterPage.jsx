import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

function RegisterPage() {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensajeError, setMensajeError] = useState("");

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
            await register(email, password);
            setEmail("");
            setPassword("");
            navigate("/profile");
        } catch (error) {
            setMensajeError(error.message);
        }
    };

    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <h1>Register</h1>
            <form onSubmit={validarFormulario}>
                {mensajeError && <p style={{ color: "red" }}>{mensajeError}</p>}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary m-2">
                    Register
                </button>
            </form>
        </Stack>
    );
}

export default RegisterPage;
