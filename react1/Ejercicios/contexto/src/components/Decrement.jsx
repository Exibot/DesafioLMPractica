import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Decrement = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <>
            <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
        </>
    );
};
export default Decrement;
