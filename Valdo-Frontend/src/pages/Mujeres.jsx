import "./Mujeres.css"; 

export default function Mujeres({ agregar }) {
  const productosMujeres = [
    { id: 1, nombre: "Blusa Casual", precio: 39.90, imagen: "/img/mujer1.jpg", descripcion: "Blusa fresca para uso diario" },
    { id: 2, nombre: "Pantalón cargo", precio: 59.90, imagen: "/img/mujer2.jpg", descripcion: "Pantalón cómodo" },
    { id: 3, nombre: "Vestido Floral", precio: 79.90, imagen: "/img/mujer3.jpg", descripcion: "Vestido ideal para verano" },
    { id: 4, nombre: "Falda Larga", precio: 49.90, imagen: "/img/mujer4.jpg", descripcion: "Falda elegante para cualquier ocasión" },
    { id: 5, nombre: "Top de Encaje", precio: 29.90, imagen: "/img/mujer5.jpg", descripcion: "Top moderno" },
    { id: 6, nombre: "Chaqueta Denim", precio: 65.90, imagen: "/img/mujer6.jpg", descripcion: "Chaqueta casual y versátil" },
    { id: 7, nombre: "Pantalón Palazzo", precio: 78.90, imagen: "/img/mujer7.jpg", descripcion: "Pantalón ancho, cómodo y moderno" },
    { id: 8, nombre: "Blusa con Volantes", precio: 45.90, imagen: "/img/mujer8.jpg", descripcion: "Blusa con detalles de volantes" },
    { id: 9, nombre: "Polera Oversize", precio: 85.90, imagen: "/img/mujer9.jpg", descripcion: "Polera cómoda" },
    { id: 10, nombre: "Cardigan Largo", precio: 100.90, imagen: "/img/mujer10.jpg", descripcion: "Cardigan cálido y cómodo" },
    { id: 11, nombre: "Camiseta Básica", precio: 25.90, imagen: "/img/mujer11.jpg", descripcion: "Camiseta para uso diario" },
    { id: 12, nombre: "Short de Verano", precio: 55.90, imagen: "/img/mujer12.jpg", descripcion: "Short ligero y fresco" },
    { id: 13, nombre: "Blusa Off-Shoulder", precio: 52.90, imagen: "/img/mujer13.jpg", descripcion: "Blusa con hombros descubiertos" }
  ];

  return (
    <div className="mujeres-container">
      <h1>Ropa de Mujeres</h1>

      <div className="mujeres-grid">
        {productosMujeres.map(item => (
          <div key={item.id} className="mujer-card">

            <div className="mujer-img-container">
              <img src={item.imagen} alt={item.nombre} />
            </div>

            <h3>{item.nombre}</h3>
            <p className="desc">{item.descripcion}</p>
            <p className="precio">S/ {item.precio}</p>
            <button onClick={() => agregar(item)}>
              Agregar al carrito
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
