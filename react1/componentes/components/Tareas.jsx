import { useState } from "react";
import { tareasIniciales } from "../src/TareasIniciales";

function Tareas() {
    const [tareas, setTareas] = useState(tareasIniciales);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = (e) => {
        e.preventDefault();
        console.log("Tarea agregada:", nuevaTarea);
        if (nuevaTarea.trim() !== "") {
            setTareas([...tareas, { nombre: nuevaTarea, completada: false }]);
            setNuevaTarea("");
        } else {
            alert("Por favor, ingresa una tarea válida.");
        }
    };
    return (
        <>
            <h1>Lista de Tareas</h1>
            <form onSubmit={agregarTarea}>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button type="submit">Agregar Tarea</button>
            </form>
            <ul>
                {tareas.map((tarea, index) => (
                    <li style={{ textDecoration: tarea.completada ? "line-through" : "none" }} key={index}>
                        {tarea.nombre}
                    <button
                        onClick={() => {
                            const nuevasTareas = [...tareas];
                            nuevasTareas[index].completada = !nuevasTareas[index].completada;
                            setTareas(nuevasTareas);
                        }}
                    >Completar</button>
                    <button
                        onClick={() => {
                            const nuevasTareas = [...tareas];
                            nuevasTareas.splice(index, 1);
                            setTareas(nuevasTareas);
                        }}
                    >Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Tareas;
