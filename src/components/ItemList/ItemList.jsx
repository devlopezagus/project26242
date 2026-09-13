import { Item } from "../Item/Item";
import { ProductStatus } from "../UI/ProductStatus/ProductStatus";
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
                <Item
                    key={product.id}
                    {...product}
                />
            ))}

        </div>
    );
};