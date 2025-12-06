import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">


      <section className="hero">
        <h1>Bienvenido a Valdo</h1>
        <p>Encuentra lo último en moda a buenos precios</p>
        <Link to="/productos" className="btn-hero">Ver Productos</Link>
      </section>


      <section className="categorias">
        <h2>Categorías destacadas</h2>
        <div className="cat-grid">
          <Link to="categoria/mujeres" className="cat-card">
            <img src="/img/mujer.jpg" alt="Mujeres" />
            <p>Mujeres</p>
          </Link>

          <Link to="categoria/hombres" className="cat-card">
            <img src="/img/hombre.jpg" alt="Hombres" />
            <p>Hombres</p>
          </Link>

          <Link to="categoria/accesorios" className="cat-card">
            <img src="/img/accesorio.png" alt="Accesorios" />
            <p>Accesorios</p>
          </Link>
        </div>
      </section>

      <section className="ofertas">
        <Link to="categoria/ofertas" className="ofertas-link">
          <h2>Ofertas de la semana</h2>
          <p>Hasta 50% de descuento en poleras</p>
        </Link>
      </section>

    </div>
  );
}
