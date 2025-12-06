package com.carritoCompra.repository;

import com.carritoCompra.model.Orden;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdenRepository extends JpaRepository<Orden, Long> {
    List<Orden> findByUsuarioId (Long usuarioId);
}
