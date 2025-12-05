import { useEffect, useState, useContext } from "react";
import ProductoCard from "../components/ProductoCard";
import { CarritoContext } from "../context/CarritoContext"; 
import "./Productos.css"; 

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const { agregarAlCarrito } = useContext(CarritoContext); 

  useEffect(() => {
    fetch("http://localhost:8080/productos")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const productosFiltrados = productos.filter(item => {
    const coincideCategoria = filtro === "Todos" || item.categoria === filtro;
    const coincideBusqueda = item.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="productos-container">
      <h1 className="titulo-productos">Productos disponibles</h1>

      <div className="productos-filtros">
        <button onClick={() => setFiltro("Todos")}>Todos</button>
        <button onClick={() => setFiltro("Mujeres")}>Mujeres</button>
        <button onClick={() => setFiltro("Hombres")}>Hombres</button>
        <button onClick={() => setFiltro("Accesorios")}>Accesorios</button>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="productos-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(item => (
            <ProductoCard
              key={item.id}
              item={item}
              agregar={agregarAlCarrito} 
            />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}
