import {useEffect, useState, useContext} from "react";
import ProductoCard from "../components/ProductoCard.jsx";
import {obtenerProductos} from "../services/productServices.js";
import {CarritoContext} from "../context/CarritoContext.jsx";
import "./Mujeres.css";

export default function Mujeres({ agregar }) {
    const [productos, setProductos] = useState([]);
    const {agregarAlCarrito} = useContext(CarritoContext);

    useEffect(() => {
        //Se llama al backend al cargar la página
        async function fetchData() {
            const data = await obtenerProductos();
            const filtrados =  data.filter(p => p.categoria ==="Mujeres"); //solo muestra ropa de hombres
            setProductos(filtrados);
        }
        fetchData();
    }, []);

    return (
    <div className="mujeres-container">
      <h1>Ropa de Mujeres</h1>
      <div className="mujeres-grid">
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
