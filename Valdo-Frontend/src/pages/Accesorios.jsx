import {useEffect, useState, useContext} from "react";
import ProductoCard from "../components/ProductoCard.jsx";
import {obtenerProductos} from "../services/productServices.js";
import {CarritoContext} from "../context/CarritoContext.jsx";
import "./Accesorios.css";

export default function Accesorios({ agregar }) {
    const [productos, setProductos] = useState([]);
    const {agregarAlCarrito} = useContext(CarritoContext);

    useEffect(() => {
        //Se llama al backend al cargar la página
        async function fetchData() {
            const data = await obtenerProductos();
            const filtrados =  data.filter(p => p.categoria ==="Accesorios"); //solo muestra ropa de hombres
            setProductos(filtrados);
        }
        fetchData();
    }, []);

  return (
    <div className="accesorios-container">
      <h1>Accesorios</h1>

      <div className="accesorios-grid">
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
