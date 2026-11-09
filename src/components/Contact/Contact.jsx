
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faWhatsapp,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import { ContactForm } from "../UI/ContactForm/ContactForm";

import "./Contact.css";

export const Contact = () => {
    return (
        <section className="contact-section">

            <div className="container">

                <header className="contact-header">
                    <h2 className="section-title">
                        Contactanos
                    </h2>

                    <p className="section-subtitle">
                        Estamos para asesorarte y cuidar de vos
                    </p>
                </header>

                <div className="contact-grid">

                    {/* FORMULARIO */}

                    <div className="contact-form-wrapper">
                        <ContactForm />
                    </div>


                    {/* INFORMACIÓN DE CONTACTO */}

                    <aside className="contact-info">

                        <h3 className="contact-info-title">
                            También podés encontrarnos
                        </h3>

                        <div className="contact-info-list">

                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>

                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>11-33344-5566</p>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>

                                <div>
                                    <h4>Email</h4>
                                    <p>info@beautylady.com</p>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>

                                <div>
                                    <h4>Zona de atención</h4>
                                    <p>Villa Adelina - Martínez</p>
                                </div>

                            </div>

                        </div>


                        {/* REDES SOCIALES */}

                        <div className="contact-social">

                            <h3>¡Seguinos!</h3>

                            <a
                                href="https://www.instagram.com/beautylady_nails/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Beauty Lady"
                                className="contact-social-link"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                        </div>

                    </aside>

                </div>

            </div>

        </section>
    );
};
