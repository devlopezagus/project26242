import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return (
      <section className="products-section">
        <div className="container">
          <p className="products-status">
            Cargando productos...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <div className="container">
          <p className="products-status products-error">
            Error al cargar los productos.
          </p>
        </div>
      </section>
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