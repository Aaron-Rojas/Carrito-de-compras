import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";
import {AuthContext} from "../context/AuthContext.js";
import {useNavigate, Link} from "react-router-dom";
import API_URL, {getHeaders} from "../services/api.js";
import "./Carrito.css";

export default function Carrito() {
    const {carrito, eliminarDelCarrito, limpiarCarrito} = useContext(CarritoContext);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [procesando, setProcesando] = useState(false);

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const handleCheckout = async () => {
        if (!user) {
            alert("Debes iniciar sesión para procesar la compra.");
            navigate("/login");
            return;
        }

        setProcesando(true);

        const ordenData = {
            usuarioId: user.id,
            items: carrito.map((prod) => ({
                productoId: prod.id,
                cantidad: prod.cantidad || 1
            }))
        };


        try {
            const response = await fetch(`${API_URL}/ordenes`, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(ordenData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Error al procesar la compra");
            }

            const data = await response.json();

            alert(`¡Compra exitosa! Orden #${data.id} generada.`);
            limpiarCarrito();
            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Hubo un problema: " + error.message);
        } finally {
            setProcesando(false);
        }
    }
    if (carrito.length === 0) {
        return (
            <div className="carrito-container carrito-vacio">
                <h2>Tu carrito está vacío </h2>
                <Link to="/productos" className="link-volver">Ir a comprar</Link>
            </div>
        );
    }


    return (
        <div className="carrito-container">
            <h1 className="carrito-titulo">Tu Carrito de Compras</h1>

            {/* Encabezados */}
            <div className="carrito-grid carrito-header">
                <span>Producto</span>
                <span>Precio</span>
                <span>Cant.</span>
                <span>Subtotal</span>
                <span></span>
            </div>

            {carrito.map((item) => (
                <div key={item.id} className="carrito-grid">
                    <div className="item-info">
                        <img src={item.imagen} alt={item.nombre}/>
                        <span>{item.nombre}</span>
                    </div>
                    <div className="item-precio">S/ {item.precio.toFixed(2)}</div>
                    <div>{item.cantidad || 1}</div>
                    <div className="item-subtotal">
                        S/ {(item.precio * (item.cantidad || 1)).toFixed(2)}
                    </div>
                    <button
                        className="btn-eliminar"
                        onClick={() => eliminarDelCarrito(item.id)}
                        title="Eliminar"
                    >
                        🗑️
                    </button>
                </div>
            ))}

            <div className="carrito-footer">
                <div className="resumen-card">
                    <h3>Total: <span className="total-amount">S/ {total.toFixed(2)}</span></h3>
                    <button
                        className="btn-pagar"
                        onClick={handleCheckout}
                        disabled={procesando}
                    >
                        {procesando ? "Procesando..." : "Pagar Ahora"}
                    </button>
                </div>
            </div>
        </div>
    );
};