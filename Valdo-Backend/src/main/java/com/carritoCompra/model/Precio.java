package com.carritoCompra.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table (name = "precios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Precio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private BigDecimal monto;

    @ManyToOne
    @JoinColumn (name = "producto_id")
    private Producto producto;

}
