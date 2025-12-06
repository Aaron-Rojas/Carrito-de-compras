package com.carritoCompra.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name ="productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Integer stock;

    private String imagen;
    private String descripcion;
    private BigDecimal precio;
    private Boolean esOferta;
    private String categoria;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    private List<Precio> precios;

}
