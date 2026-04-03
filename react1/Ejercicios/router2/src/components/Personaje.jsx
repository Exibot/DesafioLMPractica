import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Personaje() {
    const [personaje, setPersonaje] = useState({});
    const { id } = useParams();

    const getPersonaje = async (id) => {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`,
        );
        return await res.json();
    };
    useEffect(() => {
        getPersonaje(id).then((data) => setPersonaje(data));
    }, []);

    return (
        <div>
            <h1>Personajes</h1>
            <p>{JSON.stringify(personaje)}</p>
        </div>
    );
}

export default Personaje;
