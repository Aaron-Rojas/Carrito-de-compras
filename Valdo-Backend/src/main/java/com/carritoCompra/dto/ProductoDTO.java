package com.carritoCompra.dto;

import com.carritoCompra.model.Precio;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class ProductoDTO {
    private Long id;

    private String nombre;
    private Integer stock;

    private String imagen;
    private String descripcion;
    private BigDecimal precio;
    private Boolean esOferta;
    private String categoria;

    private List<Precio> precios;
}
