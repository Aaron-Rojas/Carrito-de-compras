package com.carritoCompra.repository;

import com.carritoCompra.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    //Más código

}
