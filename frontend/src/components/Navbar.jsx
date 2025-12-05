import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Valdo
      </Link>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}
