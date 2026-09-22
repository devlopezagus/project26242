import "./Item.css";

export const Item = ({
    title,
    descripcion,
    precio,
    categoria,
    cantidad,
    marca,
    imagen,
    destacado
}) => {

    const sinStock = cantidad === 0;

    return (
        <article className="product-card">

            <div className="product-image-container">

                <img
                    src={imagen}
                    alt={title}
                    className="product-image"
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


            <div className="product-content">

                <div className="product-meta">

                    <span className="product-category">
                        {categoria}
                    </span>

                    <span className="product-brand">
                        {marca}
                    </span>

                </div>


                <h3 className="product-title">
                    {title}
                </h3>


                <p className="product-description">
                    {descripcion}
                </p>


                <div className="product-footer">

                    <div>

                        <p className="product-price">
                            ${precio.toLocaleString("es-AR")}
                        </p>

                        {!sinStock && (
                            <p className="product-quantity">
                                {cantidad} disponibles
                            </p>
                        )}

                    </div>


                    {/* <button
                        className="product-button"
                        disabled={sinStock}
                    >
                        Ver detalle
                    </button> */}

                </div>

            </div>

        </article>
    );
};