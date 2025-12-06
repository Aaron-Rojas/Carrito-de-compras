package com.carritoCompra.dto;

import lombok.Data;

import java.math.BigDecimal;
@Data
public class DetalleOrdenDTO {
    private Long productoId;
    private String nombreProducto;
    private String imagenProducto;
    private Integer cantidad;
    private BigDecimal precioUnitario;
    private BigDecimal subTotal;
}
