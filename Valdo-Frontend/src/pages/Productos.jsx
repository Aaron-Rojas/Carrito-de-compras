import { useEffect, useState, useContext } from "react";
import { useParams } from " react-routes-dom ";
import ProductoCard from "../components/ProductoCard";
import {obtenerProductos} from "../services/productServices.js";
import { CarritoContext } from "../context/CarritoContext"; 
import "./Productos.css"; 

export default function Productos() {
    const { tipo } = useParams();
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const { agregarAlCarrito } = useContext(CarritoContext);

    useEffect(() => {
        async function fetchData() {
        const data = await obtenerProductos();
        let filtrados = [];
        if (!tipo){
            filtrados = data;
            setTitulo("Todos los productos");
        }else if (tipo === "ofertas"){
            filtrados = data.filter( p => p.esOferta === true );
            setTitulo("Ofertas especiales");
        }else{
        filtrados = data.filter(
            p => p.categoria && p.categoria.toLowerCase() === tipo.toLowerCase()
        );
            setTitulo(tipo.charAt(0).toUpperCase() + tipo.slice(1));
        }
        setProductos(filtrados);
        }
        fetchData();
    }, [tipo]);

  return (
    <div className="productos-container">
      <h1 className="titulo-productos">{titulo}</h1>

        <div className="productos-grid">
            {productos.length > 0 ? (
                productos.map((prod) => (
                    <ProductoCard
                        key={prod.id}
                        item={prod}
                        agregar={agregarAlCarrito}
                    />
                ))
            ) : (
                <p> No se encontraron productos en esta categoría.</p>
                )}

        </div>
    </div>
  );
}
