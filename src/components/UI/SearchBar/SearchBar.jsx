/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ productos }) => {
    const [nombre, setNombre] = useState("");

    const handleChange = (e) => setNombre(e.target.value);

    // Filtrado en el render (no en el handler)
    const productosFiltrados = productos.filter((p) =>
        p.title.toLowerCase().includes(nombre.trim().toLowerCase())
    );

    return (
        <div className="searchBarra">
            <label className="form-label" htmlFor="productoBuscar">
                Buscar producto:
            </label>
            <input
                type="text"
                className="form-control"
                id="productoBuscar"
                placeholder="Nombre del producto..."
                value={nombre}
                onChange={handleChange}
            />
        </div>
    )
}