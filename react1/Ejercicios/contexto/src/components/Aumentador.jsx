import { useState } from "react";

const Aumentador = ({ setCuenta, cuenta }) => {
    return (
        <>
            <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
        </>
    );
};
export default Aumentador;