import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "../components/MyCard";

function App() {
    return (
        <>
            <h1>Reutilizando componentes</h1>
            <MyCard
                image="https://picsum.photos/200/300"
                title="Titulo por pros"
                colorButton="success"
                textButton="Click Me!"
            />
        </>
    );
}
export default App;
