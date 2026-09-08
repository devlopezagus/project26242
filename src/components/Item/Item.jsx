export const Item = ({ title, description, price, category, image }) => {
    return (
        <article className="card">
            <img src={image} alt={title} />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-category">{category}</p>
            <p className="card-price">${price}</p>
        </article>
    )
}