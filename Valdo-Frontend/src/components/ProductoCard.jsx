import "./ProductoCard.css";

export default function ProductoCard ({ item, agregar }) {
  return (
      <div className="producto-card">
          <div className="img-container">
              <img src={item.imagen} alt={item.nombre} />
          </div>

          <div className="card-info">
              <h3>{item.nombre}</h3>
              <p className="precio">S/ {item.precio.toFixed(2)}</p>

              <button
                  className="btn-agregar"
                  onClick={() => agregar(item)}
              >
                  Agregar al Carrito
              </button>
          </div>
      </div>
  );
}


