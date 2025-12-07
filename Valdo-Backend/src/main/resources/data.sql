-- 1. LIMPIEZA (Opcional, descomenta si necesitas borrar todo antes de insertar)
-- DELETE FROM precios;
-- DELETE FROM detalles_orden;
-- DELETE FROM ordenes;
-- DELETE FROM productos;
-- DELETE FROM usuarios;

-- 2. USUARIOS
INSERT INTO usuarios (nombre, email, password) VALUES ('admin', 'admin@valdo.com', '1234');
INSERT INTO usuarios (nombre, email, password) VALUES ('cliente', 'cliente@valdo.com', '1234');

-- 3. PRODUCTOS

-- === ACCESORIOS ===
-- accesorio1: Lentes
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Lentes de Sol', 25, 49.90, '/img/accesorio1.jpg', 'Accesorios', false);

-- accesorio2: Cartera
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Cartera Elegante', 15, 89.90, '/img/accesorio2.jpg', 'Accesorios', true);

-- accesorio3: Reloj
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Reloj Clásico', 10, 129.90, '/img/accesorio3.jpg', 'Accesorios', false);

-- accesorio4: Reloj Cuero
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Reloj Correa Cuero', 12, 149.90, '/img/accesorio4.jpg', 'Accesorios', false);

-- accesorio5: Sombrero Negro
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Sombrero Negro', 20, 39.90, '/img/accesorio5.jpg', 'Accesorios', true);


-- === HOMBRES ===
-- hombre1: Camisa azul y blanco
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Camisa Azul y Blanco', 30, 59.90, '/img/hombre1.jpg', 'Hombres', false);

-- hombre2: Jeans azul
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Jeans Azul Clásico', 40, 99.90, '/img/hombre2.jpg', 'Hombres', true);

-- hombre3: Chombrepa beig
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Chompa Beige', 18, 79.90, '/img/hombre3.jpg', 'Hombres', false);

-- hombre4: Short negro
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Short Negro Urbano', 35, 45.90, '/img/hombre4.jpg', 'Hombres', false);

-- hombre5: Chaqueta negra
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Chaqueta Negra', 15, 189.90, '/img/hombre5.jpg', 'Hombres', true);


-- === MUJERES ===
-- mujer1: Blusa beig
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Blusa Beige Suave', 25, 49.90, '/img/mujer1.jpg', 'Mujeres', false);

-- mujer2: Cargo negro
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Pantalón Cargo Negro', 20, 95.90, '/img/mujer2.jpg', 'Mujeres', true);

-- mujer3: Vestido amarrillo
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Vestido Amarillo Verano', 14, 110.00, '/img/mujer3.jpg', 'Mujeres', false);

-- mujer4: Falda blanca
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Falda Blanca', 22, 55.90, '/img/mujer4.jpg', 'Mujeres', false);

-- mujer5: Pantalón verde
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Pantalón Verde Oliva', 18, 85.90, '/img/mujer5.jpg', 'Mujeres', true);

-- 4. PRECIOS HISTÓRICOS (Para mantener consistencia, IDs del 1 al 15)
-- Simplemente replicamos el precio actual.
INSERT INTO precios (monto, producto_id) VALUES (49.90, 1);
INSERT INTO precios (monto, producto_id) VALUES (89.90, 2);
INSERT INTO precios (monto, producto_id) VALUES (129.90, 3);
-- ... puedes agregar el resto si deseas, pero no es obligatorio para que funcione la tienda.