import { useState } from "react";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const handleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header className="header">

            <div className="container header-container">

                <Link to="/" className="brand">
                    Beauty Lady
                </Link>

                <div className="header-actions">

                    <button
                        className="header-icon"
                        aria-label="Usuario"
                    >
                        👤
                    </button>

                    <Link
                        to="/cart"
                        className="header-icon"
                        aria-label="Carrito"
                    >
                        🛒
                    </Link>

                    <button
                        className="menu-button"
                        onClick={handleMenu}
                        aria-label="Abrir menú"
                    >
                        {menuAbierto ? "✕" : "☰"}
                    </button>

                </div>

                <Nav menuAbierto={menuAbierto} />

            </div>

        </header>
    );
};