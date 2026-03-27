const productos = ({ title = "Producto sin nombre", price = "0", stock }) => {
    return (
        <>
            <p className={stock === "0" ? "sinStock" : ""}>
                Stock {stock}
                {title} - ${price} <span>stock {stock}</span>
            </p>
        </>
    );
};
export default productos;
