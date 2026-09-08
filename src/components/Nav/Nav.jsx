import "./Nav.css";

export const Nav = ({ menuAbierto }) => {
    return (
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
    );
};