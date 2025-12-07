
-- Usuarios de prueba
INSERT INTO usuarios (nombre, email, password) VALUES ('admin', 'admin@valdo.com', '1234');
INSERT INTO usuarios (nombre, email, password) VALUES ('cliente', 'cliente@valdo.com', '1234');

-- Productos con Categoría y Precio (Hombres)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Polo Oversize', 50, 49.90, 'https://imgs.search.brave.com/ZBPsez__CXKNqnhoh1dwD9fDEpjnp505Y0cf7wZZQbI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FwLmNvbS93ZWJj/b250ZW50LzAwNjAv/MDIyLzA3MS9jbjYw/MDIyMDcxLmpwZw', 'Hombres', false);

INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Pantalón Cargo', 30, 89.90, 'https://i.imgur.com/3N2Fq0H.jpeg', 'Hombres', true);

-- Productos (Mujeres)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Blusa Floral', 20, 39.90, 'https://i.imgur.com/mujer1.jpg', 'Mujeres', false);

-- Productos (Accesorios)
INSERT INTO productos (nombre, stock, precio, imagen, categoria, es_oferta)
VALUES ('Gorra Negra', 15, 29.90, 'https://i.imgur.com/accesorio1.jpg', 'Accesorios', false);


-- Precios (Vinculados por ID 1, 2, 3)
INSERT INTO precios (monto,  producto_id) VALUES (49.90,  1);
INSERT INTO precios (monto,  producto_id) VALUES (89.90,  2);
INSERT INTO precios (monto,  producto_id) VALUES (129.90,  3);

