import "./Footer.css";

export const Footer = () => {

    return (
        <footer className="footer">

            <div className="container footer-grid">


                <section className="footer-brand">

                    <h2>Beauty Lady</h2>

                    <p>
                        Cuidado profesional y estética integral
                        para manos y pies en la comodidad de tu hogar.
                    </p>

                </section>


                <section>

                    <h3 className="footer-title">
                        Contacto
                    </h3>

                    <div className="footer-contact">

                        <p>📱 11-3334-4556</p>

                        <p>📍 Buenos Aires - Argentina</p>

                        <p>✉ info@beautylady.com</p>

                    </div>

                </section>


                <section>

                    <h3 className="footer-title">
                        ¡Seguinos!
                    </h3>

                    <div className="footer-social">

                        <a href="#">Instagram</a>

                        <a href="#">Facebook</a>

                        <a href="#">WhatsApp</a>

                    </div>

                </section>

            </div>


            <div className="footer-bottom">

                Beauty Lady © Todos los derechos reservados

            </div>

        </footer>
    );
};