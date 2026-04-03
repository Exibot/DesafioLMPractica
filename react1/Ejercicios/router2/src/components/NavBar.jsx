import { NavLink } from "react-router-dom";

function NavBar() {
    const setActiveStyle = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <>
            <div>
                <NavLink to="/" className={setActiveStyle}>
                    Home
                </NavLink>
                {" | "}
                <NavLink to="/personajes" className={setActiveStyle}>
                    Personajes
                </NavLink>
            </div>
        </>
    );
}

export default NavBar;