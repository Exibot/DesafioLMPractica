import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import NavbarComponent from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./components/Profile.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import { UserContext } from "./context/UserContext.jsx";

function App() {
    const { token } = useContext(UserContext);
    return (
        <>
            <Container fluid>
                <NavbarComponent />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/pizza/:id" element={<Pizza />} />

                    <Route
                        path="/profile"
                        element={token ? <Profile /> : <Navigate to="/login" />}
                    />
                </Routes>
                <Footer />
            </Container>
        </>
    );
}

export default App;
