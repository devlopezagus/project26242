import { useState } from "react";
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


                <nav className={`nav ${menuAbierto ? "nav-open" : ""}`}>

                    <ul className="nav-list">
                        <li>
                            <a href="/" className="nav-link">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/servicios" className="nav-link">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="/galeria" className="nav-link">
                                Galería
                            </a>
                        </li>
                        <li>
                            <a href="/contacto" className="nav-link">
                                Contacto
                            </a>
                        </li>
                    </ul>

                </nav>

            </div>

        </header>
    );
};