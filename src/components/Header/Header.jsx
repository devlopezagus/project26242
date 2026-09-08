import { useState } from "react";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const handleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header className="header">

            <div className="container header-container">

                <a href="/" className="brand">
                    Beauty Lady
                </a>

                <div className="header-actions">

                    <button
                        className="header-icon"
                        aria-label="Usuario"
                    >
                        👤
                    </button>

                    <button
                        className="header-icon"
                        aria-label="Carrito"
                    >
                        🛒
                    </button>

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