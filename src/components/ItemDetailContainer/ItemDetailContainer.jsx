import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ProductStatus } from "../UI/ProductStatus/ProductStatus";
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

        fetch("/data/productos.json")
            .then((res) => {

                // SOLO PARA PROBAR EL ERROR DE MESSAGE, BORRAR DESPUES
                // if (true) {
                //     throw new Error("No se pudo cargar el producto");
                // }

                if (!res.ok) {
                    throw new Error("No se pudo cargar el producto");
                }

                // console.log(id);
                // console.log(res);


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
        return <ProductStatus message="Cargando producto..." />;
    }

    if (error) {
        return <ProductStatus message={error} isError />;
    }

    return (
        <section className="product-detail-section">
            <div className="container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    );
};