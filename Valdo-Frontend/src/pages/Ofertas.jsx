import { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";
import "./Ofertas.css";

export default function Ofertas({ agregar }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const mockProductos = [
      { 
        id: 1, 
        nombre: "Blazer Elegante", 
        precio: 179.90, 
        oferta: true, 
        imagen: "/img/oferta1.jpg"
      },
      { 
        id: 2, 
        nombre: "Falda Midi", 
        precio: 89.90, 
        oferta: true, 
        imagen: "/img/oferta2.jpg"
      },
      { 
        id: 3, 
        nombre: "Zapatos Oxford", 
        precio: 139.90, 
        oferta: true, 
        imagen: "/img/oferta3.jpg"
      },
      { 
        id: 4, 
        nombre: "Chaqueta Vaquera", 
        precio: 129.90, 
        oferta: true, 
        imagen: "/img/oferta4.jpg"
      },
      { 
        id: 5, 
        nombre: "Botines de Cuero", 
        precio: 159.90, 
        oferta: true, 
        imagen: "/img/oferta5.jpg"
      }
    ];

    setProductos(mockProductos);
  }, []);

  const productosEnOferta = productos.filter(item => item.oferta);

  return (
    <div className="ofertas-container">
      <h1>Ofertas de la Semana</h1>
      <div className="productos-grid">
        {productosEnOferta.length > 0 ? (
          productosEnOferta.map(item => (
            <ProductoCard key={item.id} item={item} agregar={agregar} />
          ))
        ) : (
          <p>No hay ofertas disponibles.</p>
        )}
      </div>
    </div>
  );
}
