
-- Usuarios de prueba
INSERT INTO usuarios (username, email, password) VALUES ('admin', 'admin@valdo.com', '1234');
INSERT INTO usuarios (username, email, password) VALUES ('cliente', 'cliente@valdo.com', '1234');

-- Productos con Categoría y Precio (Hombres)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Polo Oversize', 50, 49.90, 'https://i.imgur.com/7yUvePI.jpeg', 'Hombres', false);

INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Pantalón Cargo', 30, 89.90, 'https://i.imgur.com/3N2Fq0H.jpeg', 'Hombres', true);

-- Productos (Mujeres)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Blusa Floral', 20, 39.90, 'https://i.imgur.com/mujer1.jpg', 'Mujeres', false);

-- Productos (Accesorios)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Gorra Negra', 15, 29.90, 'https://i.imgur.com/accesorio1.jpg', 'Accesorios', false);


-- Precios (Vinculados por ID 1, 2, 3)
INSERT INTO precios (monto, moneda, producto_id) VALUES (49.90, 'PEN', 1);
INSERT INTO precios (monto, moneda, producto_id) VALUES (89.90, 'PEN', 2);
INSERT INTO precios (monto, moneda, producto_id) VALUES (129.90, 'PEN', 3);

