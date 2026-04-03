import "./App.css";
import CounterProvider from "./context/CounterContext";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

function App() {
    return (
        <>
            <CounterProvider>
                <Increment />
                <Decrement />
            </CounterProvider>
        </>
    );
}

export default App;
