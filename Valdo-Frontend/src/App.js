import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import {CarritoProvider} from "./context/CarritoContext.jsx";

import "./App.css";

function App() {
  return (

      <CarritoProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/categoria/:tipo" element={<Productos />} />
                <Route path="/productos" element={<Productos />} />
          </Routes>
       </Router>
    </CarritoProvider>
  );
}
//XD
export default App;
