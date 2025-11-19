package com.carritoCompra.repository;

import com.carritoCompra.model.Precio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PrecioRepository extends JpaRepository<Precio, Long> {

    Optional<Precio> findByProductoIdOrderByIdDesc (Long productoId);
 }
