import "./Hombres.css";

export default function Hombres({ agregar }) {
  const productosHombres = [
    { id: 1, nombre: "Camisa Casual", precio: 49.90, imagen: "/img/hombre1.jpg", descripcion: "Camisa cómoda para uso diario" },
    { id: 2, nombre: "Pantalón Jeans", precio: 70.90, imagen: "/img/hombre2.jpg", descripcion: "Jeans clásicos" },
    { id: 3, nombre: "Chompa de Lana", precio: 65.90, imagen: "/img/hombre3.jpg", descripcion: "Chompa cálida y elegante" },
    { id: 4, nombre: "Short Deportivo", precio: 45.90, imagen: "/img/hombre4.jpg", descripcion: "Short ideal para entrenar" },
    { id: 5, nombre: "Chaqueta de Cuero", precio: 100.90, imagen: "/img/hombre5.jpg", descripcion: "Chaqueta elegante y moderna" },
    { id: 6, nombre: "Camiseta Básica", precio: 40.90, imagen: "/img/hombre6.jpg", descripcion: "Camiseta cómoda para el día a día" },
    { id: 7, nombre: "Pantalón Chino", precio: 75.90, imagen: "/img/hombre7.jpg", descripcion: "Pantalón versátil y casual" },
    { id: 8, nombre: "Polera Polo", precio: 55.90, imagen: "/img/hombre8.jpg", descripcion: "Polera elegante y deportiva" },
    { id: 9, nombre: "Abrigo Largo", precio: 114.90, imagen: "/img/hombre9.jpg", descripcion: "Abrigo ideal para invierno" },
    { id: 10, nombre: "Chaqueta Denim", precio: 95.90, imagen: "/img/hombre10.jpg", descripcion: "Cazadora casual" },
    { id: 11, nombre: "Bermuda de Verano", precio: 58.90, imagen: "/img/hombre11.jpg", descripcion: "Bermuda ligera y fresca" },
    { id: 12, nombre: "Chaleco de Algodón", precio: 85.90, imagen: "/img/hombre12.jpg", descripcion: "Chaleco cómodo y versátil" },
    { id: 13, nombre: "Camisa Formal", precio: 80.90, imagen: "/img/hombre13.jpg", descripcion: "Camisa elegante para oficina" }
  ];

  return (
    <div className="hombres-container">
      <h1>Ropa de Hombres</h1>
      <div className="hombres-grid">
        {productosHombres.map(item => (
          <div key={item.id} className="hombre-card">
            <div className="hombre-img-container">
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
