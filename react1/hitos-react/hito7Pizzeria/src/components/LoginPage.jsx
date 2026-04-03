import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Stack from "react-bootstrap/Stack";

function LoginPage() {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [mensajeError, setMensajeError] = useState("");

    const validarFormulario = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            setError(true);
            setMensajeError("El email es obligatorio");
        } else if (password.length < 6) {
            setError(true);
            setMensajeError("La contraseña debe tener al menos 6 caracteres");
        } else if (password.trim() === "") {
            setError(true);
            setMensajeError("La contraseña es obligatoria");
        } else {
            setError(false);
            setMensajeError("");
            setEmail("");
            setPassword("");
            login();
        }
    };

    return (
        <>
            <Stack gap={2} className="col-md-5 mx-auto">
                <h1>Login</h1>
                <form onSubmit={validarFormulario}>
                    {error && <p style={{ color: "red" }}>{mensajeError}</p>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-2">
                        Login
                    </button>
                </form>
            </Stack>
        </>
    );
}

export default LoginPage;
