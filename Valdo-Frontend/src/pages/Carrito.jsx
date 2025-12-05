import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>

      {carrito.length === 0 && <p>Tu carrito está vacío</p>}

      {carrito.map(item => (
        <div key={item.id} className="carrito-item">
          <img src={item.imagen} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <p>S/ {item.precio}</p>
            <button onClick={() => eliminarDelCarrito(item.id)}>
              Quitar
            </button>
          </div>
        </div>
      ))}

      <h2>
        Total: S/ {carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2)}
      </h2>
    </div>
  );
}
