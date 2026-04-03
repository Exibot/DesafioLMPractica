import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
const Increment = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment: {count}
            </button>
        </>
    );
};

export default Increment;
