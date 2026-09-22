import Swal from "sweetalert2";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    const {
        title,
        descripcion,
        precio,
        categoria,
        cantidad,
        marca,
        imagen,
        destacado
    } = item;

    const sinStock = cantidad === 0;

    const agregarCarritoProvisorio = () => {
        Swal.fire({
            icon: "success",
            title: "Producto agregado",
            text: "El producto se ha agregado al carrito",
        });
    };

    return (
        <article className="product-detail">
            <div className="product-detail-image-container">
                <img
                    src={imagen}
                    alt={title}
                    className="product-detail-image"
                />

                {destacado && (
                    <span className="product-featured">
                        Destacado
                    </span>
                )}

                {sinStock && (
                    <span className="product-stock product-stock-empty">
                        Sin stock
                    </span>
                )}
            </div>

            <div className="product-detail-content">
                <div className="product-detail-meta">
                    <span className="product-category">
                        {categoria}
                    </span>

                    <span className="product-brand">
                        {marca}
                    </span>
                </div>

                <h1 className="product-detail-title">
                    {title}
                </h1>

                <p className="product-detail-description">
                    {descripcion}
                </p>

                <div className="product-detail-info">
                    <p className="product-detail-price">
                        ${precio.toLocaleString("es-AR")}
                    </p>

                    {!sinStock && (
                        <p className="product-detail-quantity">
                            {cantidad} disponibles
                        </p>
                    )}

                    {sinStock && (
                        <p className="product-detail-unavailable">
                            Producto sin stock
                        </p>
                    )}
                </div>

                <button
                    className="product-detail-button"
                    disabled={sinStock}
                    onClick={agregarCarritoProvisorio}
                >
                    {sinStock ? "Sin stock" : "Agregar al carrito"}
                </button>
            </div>
        </article>
    );
};