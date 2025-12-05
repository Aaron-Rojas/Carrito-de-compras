import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Mujeres from "./pages/Mujeres";
import Hombres from "./pages/Hombres";
import Accesorios from "./pages/Accesorios";
import Ofertas from "./pages/Ofertas";


import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregar = (prod) => {
    setCarrito([...carrito, prod]);
  };

  const quitar = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos agregar={agregar} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} quitar={quitar} />} />
        <Route path="/mujeres" element={<Mujeres agregar={agregar} />} />
        <Route path="/hombres" element={<Hombres agregar={agregar} />} />
        <Route path="/accesorios" element={<Accesorios agregar={agregar} />} />
        <Route path="/ofertas" element={<Ofertas agregar={agregar} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
