import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/HomePage";
import Plans from "./views/PlansPage";
import NotFound from "./views/NotFound";
const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planes" element={<Plans />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};
export default App;
