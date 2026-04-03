import { createContext, useState } from "react";

export const UserContext = createContext();

const apiUrl = "http://localhost:5000/api/auth";

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");

    const login = async ({ email, password }) => {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || "Error al iniciar sesión");
        }

        setToken(data.token);
        setEmail(data.email);

        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        return data;
    };

    const register = async ({ email, password }) => {
        const response = await fetch(`${apiUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || "Error al registrar usuario");
        }

        setToken(data.token);
        setEmail(data.email);

        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);

        return data;
    };

    const logout = () => {
        setToken("");
        setEmail("");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    const getProfile = async () => {
        const savedToken = token || localStorage.getItem("token");

        if (!savedToken) {
            throw new Error("No hay token");
        }

        const response = await fetch(`${apiUrl}/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${savedToken}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || "Error al obtener perfil");
        }

        setEmail(data.email);
        localStorage.setItem("email", data.email);

        return data;
    };

    return (
        <UserContext.Provider
            value={{ token, email, login, register, logout, getProfile }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
