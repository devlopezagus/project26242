import { ProductStatus } from "../UI/ProductStatus/ProductStatus";

export const Error404 = () => {
    return (
        <ProductStatus
            message="La página solicitada NO existe"
            isError
        />
    );
};
