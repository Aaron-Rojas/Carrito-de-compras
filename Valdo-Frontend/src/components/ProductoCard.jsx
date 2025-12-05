import "./ProductoCard.css";

function ProductoCard({ item, agregar }) {
  return (
    <div className="card">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p className="precio">S/ {item.precio}</p>
      <button onClick={() => agregar(item)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductoCard;
