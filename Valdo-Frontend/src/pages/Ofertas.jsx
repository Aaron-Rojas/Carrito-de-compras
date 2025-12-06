import { useEffect, useState, useContext } from "react";
import ProductoCard from "../components/ProductoCard";
import {obtenerProductos} from "../services/productServices.js";
import {CarritoContext} from "../context/CarritoContext.jsx";
import "./Ofertas.css";

export default function Ofertas() {
    const [productos, setProductos] = useState([]);
    const {agregarAlCarrito} = useContext(CarritoContext);

    useEffect(() => {
        //Se llama al backend al cargar la página
        async function fetchData() {
            const data = await obtenerProductos();
            const filtrados =  data.filter(p => p.categoria ==="Ofertas"); //solo muestra ropa de hombres
            setProductos(filtrados);
        }
        fetchData();
    }, []);
  return (
    <div className="ofertas-container">
      <h1>Ofertas de la Semana</h1>
      <div className="productos-grid">
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
