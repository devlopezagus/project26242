
import { useState } from "react";
import { showWarning, showSuccess, showLoading } from "../../../utils/alerts";
import "./ContactForm.css";

const initialFormData = {
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
};

export const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.mensaje.trim().length < 10) {
            showWarning(
                "Mensaje muy corto",
                "Por favor, contanos un poco más para poder ayudarte."
            );
            return;
        }

        showLoading(
            "¡Enviando!",
            "Estamos procesando tu mensaje..."
        );

        // Simulación de envío
        setTimeout(() => {
            showSuccess(
                "¡Éxito!",
                `Gracias ${formData.nombre}, nos contactaremos pronto.`
            );

            setFormData(initialFormData);
        }, 2000);
    };

    return (
        <div className="contact-form-card">

            <h3 className="contact-form-title">
                Envianos un mensaje
            </h3>

            <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-row">

                    <div className="form-group">
                        <label htmlFor="nombre">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="asunto">
                        Asunto
                    </label>

                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.asunto}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">
                        Mensaje
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        placeholder="Escribí tu consulta aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary contact-submit"
                >
                    Enviar mensaje
                </button>

            </form>
        </div>
    );
};
