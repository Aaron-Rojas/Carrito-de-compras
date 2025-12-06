import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Valdo
      </Link>
      <ul>
          <li><Link to="/categoria/hombres">Hombres</Link></li>
          <li><Link to="/categoria/mujeres">Mujeres</Link></li>
          <li><Link to="/categoria/accesorios">Accesorios</Link></li>
          <li><Link to="/categoria/ofertas">Ofertas</Link></li>
      </ul>
    </nav>
  );
}
