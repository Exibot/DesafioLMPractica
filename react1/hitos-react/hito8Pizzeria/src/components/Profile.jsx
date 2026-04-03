import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { email, getProfile, logout } = useContext(UserContext);

    useEffect(() => {
        getProfile().catch(console.error);
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Profile</h1>
            <p>Email: {email}</p>
            <button className="btn btn-danger" onClick={logout}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Profile;
