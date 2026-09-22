import "./SearchBar.css";

export const SearchBar = ({ searchTerm, onSearchChange }) => {

    return (
        <div className="searchBarra">
            <label
                className="form-label"
                htmlFor="productoBuscar"
            >
                Buscar producto:
            </label>

            <input
                type="text"
                className="form-control"
                id="productoBuscar"
                placeholder="Nombre del producto..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};