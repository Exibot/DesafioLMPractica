import { useState } from "react";
import Stack from "react-bootstrap/Stack";
function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
        } else if (password !== confirmPassword) {
            setError(true);
            setMensajeError("Las contraseñas no coinciden");
        } else {
            setError(false);
            setMensajeError("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            alert("¡Registro exitoso!");
        }
    };

    return (
        <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <h1>Register</h1>
                {error && <p style={{ color: "red" }}>{mensajeError}</p>}
                <form onSubmit={validarFormulario}>
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
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">
                            Repita Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary m-2">
                        Registrarse
                    </button>
                </form>
            </Stack>
        </div>
    );
}
export default RegisterPage;
