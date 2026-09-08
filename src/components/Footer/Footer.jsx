import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebookF,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import {
    faPhone,
    faLocationDot,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">

            <div className="container footer-grid">

                <section className="footer-brand">
                    <h2>Beauty Lady</h2>

                    <p>
                        Cuidado profesional y estética integral para manos y pies
                        en la comodidad de tu hogar.
                    </p>
                </section>


                <section>
                    <h3 className="footer-title">
                        Contacto
                    </h3>

                    <div className="footer-contact">

                        <p>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>11-33344-5566</span>
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Villa Adelina - Martínez</span>
                        </p>

                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>info@beautylady.com</span>
                        </p>

                    </div>
                </section>


                <section>
                    <h3 className="footer-title">
                        ¡Seguinos!
                    </h3>

                    <div className="footer-social">

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a
                            href="#"
                            aria-label="WhatsApp"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>

                    </div>
                </section>

            </div>


            <div className="footer-bottom">
                Beauty Lady © Todos los derechos reservados
            </div>

        </footer>
    );
};