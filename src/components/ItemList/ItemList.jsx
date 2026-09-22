import { Item } from "../Item/Item";
import { ProductStatus } from "../UI/ProductStatus/ProductStatus";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {

    if (!products.length) {
        return (
            <ProductStatus message="No se encontraron productos." />
        );
    }

    return (
        <div className="list-products">

            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item {...product} />
                </Link>
            ))}

        </div>
    );
};