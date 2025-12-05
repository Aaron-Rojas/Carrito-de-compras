import "./Accesorios.css";

export default function Accesorios({ agregar }) {
  const productosAccesorios = [
    { id: 1, nombre: "Bolso de Cuero", precio: 83.90, imagen: "/img/accesorio1.jpg", descripcion: "Bolso elegante y resistente" },
    { id: 2, nombre: "Reloj Casual", precio: 75.90, imagen: "/img/accesorio2.jpg", descripcion: "Reloj casual para uso diario" },
    { id: 3, nombre: "Gafas de Sol", precio: 68.90, imagen: "/img/accesorio3.jpg", descripcion: "Protección UV y estilo moderno" },
    { id: 4, nombre: "Cinturón de Piel", precio: 72.90, imagen: "/img/accesorio4.jpg", descripcion: "Cinturón clásico y versátil" },
    { id: 5, nombre: "Sombrero Fedora", precio: 64.90, imagen: "/img/accesorio5.jpg", descripcion: "Sombrero elegante para cualquier ocasión" },
    { id: 6, nombre: "Bufanda de Lana", precio: 56.90, imagen: "/img/accesorio6.jpg", descripcion: "Bufanda cálida y cómoda" },
    { id: 7, nombre: "Mochila Casual", precio: 86.90, imagen: "/img/accesorio7.jpg", descripcion: "Mochila resistente y moderna" },
    { id: 8, nombre: "Pulsera de Cuero", precio: 39.90, imagen: "/img/accesorio8.jpg", descripcion: "Pulsera ajustable y elegante" },
    { id: 9, nombre: "Gorra Deportiva", precio: 45.90, imagen: "/img/accesorio9.jpg", descripcion: "Gorra cómoda para el día a día" },
    { id: 10, nombre: "Collar elegante", precio: 65.90, imagen: "/img/accesorio10.jpg", descripcion: "Collar moderno para cualquier ocasión" }
  ];

  return (
    <div className="accesorios-container">
      <h1>Accesorios</h1>

      <div className="accesorios-grid">
        {productosAccesorios.map(item => (
          <div key={item.id} className="accesorio-card">
            <div className="accesorio-img-container">
              <img src={item.imagen} alt={item.nombre} />
            </div>
            <h3>{item.nombre}</h3>
            <p className="desc">{item.descripcion}</p>
            <p className="precio">S/ {item.precio}</p>
            <button onClick={() => agregar(item)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
