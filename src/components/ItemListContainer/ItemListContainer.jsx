import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ProductStatus } from "../UI/ProductStatus/ProductStatus";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true);  // para proximos filtros
    // setError(null); // para proximos filtros

    // prueba mensajes de error y loading
    // quitar setTimeout para ver el fetch sin delay
    setTimeout(() => {
      fetch("/data/productos.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error al cargar los productos.");
          }

          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 2000);

    /*  
      fetch("/data/productos.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("No se pudieron cargar los productos");
          }
  
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });

    */
  }, []);



  if (loading) {
    return (
      <ProductStatus message="Cargando productos..." />
    );
  }

  if (error) {
    return (
      <ProductStatus
        message="Error al cargar los productos."
        isError
      />
    );
  }

  return (
    <section className="products-section">

      <div className="container">

        <div className="products-header">

          <h2 className="section-title">
            Nuestros Productos
          </h2>

          <p className="section-subtitle">
            Productos seleccionados para complementar tu cuidado
          </p>

        </div>

        <ItemList products={products} />

      </div>

    </section>
  );
};