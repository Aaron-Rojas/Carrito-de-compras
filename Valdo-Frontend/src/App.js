import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";


import "./App.css";

function App() {

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
