import { useState } from 'react';
export const Formulario = ({ usuarios, setUsuarios }) => {

    const [fullName, setFullName] = useState({
        id: '',
        nombre: '',
        apellido: '',
        email: ''
    });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío del formulario
        if (fullName.nombre === '' || fullName.apellido === '' || fullName.email === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" required />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido" required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" required />
            </div>
            <button type="submit">Enviar</button>
        </form>

    );
}