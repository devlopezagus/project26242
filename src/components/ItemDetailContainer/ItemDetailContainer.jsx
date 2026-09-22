import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Si volvemos a renderizar componente por productos relacionados, reset
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setError(null);
        setLoading(true);
        setItemDetail(null);

        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("No se pudo cargar el producto");
                }

                return res.json();
            })
            .then((data) => {
                // console.log(data);

                const productFound = data.find(
                    (product) => product.id === Number(id)
                );

                if (!productFound) {
                    throw new Error("Elemento no encontrado");
                }

                setItemDetail(productFound);
                // console.log(productFound);

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <section className="product-detail-section">
                <div className="container">
                    <p className="products-status">
                        Cargando producto...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="product-detail-section">
                <div className="container">
                    <p className="products-status products-error">
                        {error.message}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="product-detail-section">
            <div className="container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    );
};