import { useState } from "react";
import Aumentador from "./Aumentador";

const Cuenta = () => {
    const [cuenta, setCuenta] = useState(0);
    return (
        <>
            <div>
                <ul>
                    {cuenta}

                    <Aumentador setCuenta={setCuenta} cuenta={cuenta} />
                </ul>
            </div>
        </>
    );
};
export default Cuenta;
