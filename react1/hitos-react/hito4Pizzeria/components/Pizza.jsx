import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";

function Pizza() {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        getPizza();
    }, []);

    const getPizza = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/pizzas/p001",
            );
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error("Error fetching pizzas:", error);
        }
    };

    return (
        <>
            {pizza && <CardPizza {...pizza} />}
        </>
    );
}

export default Pizza;
