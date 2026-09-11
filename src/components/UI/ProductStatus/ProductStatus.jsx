export const ProductStatus = ({ message, isError = false }) => {
    return (
        <section className="products-section">
            <div className="container">
                <p className={`products-status ${isError ? "products-error" : ""}`}>
                    {message}
                </p>
            </div>
        </section>
    );
};