import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ menuAbierto }) => {
    return (
        <nav className={`nav ${menuAbierto ? "nav-open" : ""}`}>

            <ul className="nav-list">

                <li>
                    <Link to="/" className="nav-link">
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link to="/services" className="nav-link">
                        Servicios
                    </Link>
                </li>

                <li>
                    <Link to="/gallery" className="nav-link">
                        Galería
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className="nav-link">
                        Contacto
                    </Link>
                </li>

            </ul>

        </nav>
    );
};