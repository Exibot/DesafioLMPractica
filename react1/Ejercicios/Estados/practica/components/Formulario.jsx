import { useState } from "react";
function Formulario() {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);
    const validarInput = (e) => {
        e.preventDefault();
        if (nombre.trim() === "") {
            setError(true);
        } else {
            setError(false);
        }
    };
    return (
        <>
            <form onSubmit={validarInput}>
                {error ? <p className="text-danger">El nombre es obligatorio</p> : null}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark mt-3">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
}

export default Formulario;
