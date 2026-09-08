import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p>Error al cargar productos...</p>
  }

  return (
    <div className="list-container">
      <ItemList products={products} />
    </div>
  )
}