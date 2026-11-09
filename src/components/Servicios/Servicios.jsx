import { useState } from "react";
import "./Servicios.css";

const categorias = [
    "Manos",
    "Pies",
    "Combos",
    "Reflexología"
];

const serviciosData = [
    {
        id: 1,
        categoria: "Manos",
        nombre: "Manicuría Tradicional",
        precio: 15000,
        observaciones: "No incluye decoración"
    },
    {
        id: 2,
        categoria: "Manos",
        nombre: "Manicuría Semi-permanente",
        precio: 20000,
        observaciones: "No incluye decoración"
    },
    {
        id: 3,
        categoria: "Manos",
        nombre: "Kapping en Gel + Nail Art",
        precio: 25000,
        observaciones: ""
    },
    {
        id: 4,
        categoria: "Pies",
        nombre: "Belleza de Pies Tradicional",
        precio: 11000,
        observaciones: "Incluye exfoliación, crema, torno y belleza"
    },
    {
        id: 5,
        categoria: "Combos",
        nombre: "Belleza Manos + Pies",
        precio: 20000,
        observaciones: "Esmaltado semi-permanente"
    },
    {
        id: 6,
        categoria: "Reflexología",
        nombre: "Masaje plantar y de piernas",
        precio: 15000,
        observaciones: "Incluye exfoliación y crema"
    }
];

export const Servicios = () => {
    const [categoriaAbierta, setCategoriaAbierta] = useState("Manos");

    const handleCategoria = (categoria) => {
        setCategoriaAbierta(
            categoriaAbierta === categoria ? null : categoria
        );
    };

    return (
        <section className="services-section">
            <div className="container">

                <header className="services-header">
                    <h2 className="section-title">
                        Nuestra Carta de Servicios
                    </h2>

                    <p className="section-subtitle">
                        Cuidado y belleza para tus manos y pies
                    </p>
                </header>

                <div className="services-accordion">

                    {categorias.map((categoria) => {

                        const serviciosCategoria = serviciosData.filter(
                            (servicio) => servicio.categoria === categoria
                        );

                        const estaAbierta = categoriaAbierta === categoria;

                        return (
                            <article
                                className={`service-category ${estaAbierta ? "category-open" : ""}`}
                                key={categoria}
                            >

                                <h3 className="category-heading">
                                    <button
                                        className="category-button"
                                        type="button"
                                        onClick={() => handleCategoria(categoria)}
                                        aria-expanded={estaAbierta}
                                    >
                                        <span>{categoria}</span>

                                        <span className="category-icon">
                                            {estaAbierta ? "−" : "+"}
                                        </span>
                                    </button>
                                </h3>

                                {estaAbierta && (
                                    <div className="category-content">

                                        {serviciosCategoria.map((servicio) => (
                                            <div
                                                className="service-item"
                                                key={servicio.id}
                                            >

                                                <div className="service-info">
                                                    <h4>{servicio.nombre}</h4>

                                                    {servicio.observaciones && (
                                                        <p>
                                                            {servicio.observaciones}
                                                        </p>
                                                    )}
                                                </div>

                                                <span className="service-price">
                                                    ${servicio.precio.toLocaleString("es-AR")}
                                                </span>

                                            </div>
                                        ))}

                                    </div>
                                )}

                            </article>
                        );
                    })}

                </div>

                <div className="services-note">
                    <p>
                        Los precios pueden variar según la zona de atención
                        a domicilio.
                    </p>
                </div>

            </div>
        </section>
    );
};
