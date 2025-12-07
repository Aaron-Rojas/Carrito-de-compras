import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(()=>{
      try{
          const carritoGuardado = localStorage.getItem("valdo_carriro");
          return carritoGuardado ? JSON.parse(carritoGuardado) : [];
      }catch(error){
          return [];
      }
  });

    useEffect(() => {
        localStorage.setItem("valdo_carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const itemExistente = prevCarrito.find((item) => item.id === producto.id);

            if (itemExistente) {
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: (item.cantidad || 1) + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };


    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}
