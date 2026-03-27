import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [productos, setProductos] = useState([
        {id: 1, nombre: "Manzana"},
        {id: 2, nombre: "Banana"},
        {id: 3, nombre: "Naranja"},
    ]);

    const [inputValue, setInputValue] = useState("");
    function actualizarInput(e) {
        setInputValue(e.target.value);
    }

    function agregarProducto(e) {
        e.preventDefault();
        const nuevoProducto = {
            id: productos.length + 1,
            nombre: inputValue,
        };
        setProductos([...productos, nuevoProducto]);
        setInputValue("");
    }

    return (
        <>
            <h1>Tienda React</h1>
            <form onSubmit={agregarProducto}>
                <input type="text" placeholder="Agregar producto" onChange={actualizarInput} />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.nombre}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
