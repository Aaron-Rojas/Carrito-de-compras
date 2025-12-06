import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.js";
import {CarritoContext} from "../context/CarritoContext.jsx";

import "./Navbar.css";

export default function Navbar() {

    const { user, logout } = useContext(AuthContext);
    const { carrito } = useContext(CarritoContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
  return (
      <nav className="navbar">
          <Link to="/" className="logo">VALDO</Link>

          <ul className="nav-links">
              <li><Link to="/categoria/hombres">Hombres</Link></li>
              <li><Link to="/categoria/mujeres">Mujeres</Link></li>
              <li><Link to="/categoria/accesorios">Accesorios</Link></li>
              <li><Link to="/categoria/ofertas" className="oferta-link">Ofertas</Link></li>
          </ul>

          <div className="nav-actions">

              {user ? (
                  <div className="user-info">
                      <span className="user-name">Hola, {user.nombre}</span>
                      <button onClick={handleLogout} className="btn-logout">
                          Salir
                      </button>
                  </div>
              ) : (
                  <Link to="/login" className="btn-login-nav">
                      Ingresar
                  </Link>
              )}

              <Link to="/carrito" className="cart-icon">
                  🛒 <span className="cart-count">{carrito.length}</span>
              </Link>
          </div>
      </nav>
  );
}