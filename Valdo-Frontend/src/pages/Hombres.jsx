import {useEffect, useState, useContext} from "react";
import ProductoCard from "../components/ProductoCard.jsx";
import {obtenerProductos} from "../services/productServices.js";
import {CarritoContext} from "../context/CarritoContext.jsx";
import "./Hombres.css";

export default function Hombres() {
  const [productos, setProductos] = useState([]);
  const {agregarAlCarrito} = useContext(CarritoContext);

  useEffect(() => {
    //Se llama al backend al cargar la página
    async function fetchData() {
        const data = await obtenerProductos();
        const filtrados =  data.filter(p => p.categoria ==="Hombres"); //solo muestra ropa de hombres
        setProductos(filtrados);
    }
    fetchData();
  }, []);
  return (
    <div className="hombres-container">
      <h1>Ropa de Hombres</h1>
      <div className="hombres-grid">
          {productos.length > 0 ? (
              productos.map((prod) => (
                  <ProductoCard
                      key = {prod.id}
                      item = {prod}
                      agregar = {agregarAlCarrito}
                  />
              ))
          ):(
              <p> Cargando Productos...</p>
              )}
      </div>
    </div>
  );
}
