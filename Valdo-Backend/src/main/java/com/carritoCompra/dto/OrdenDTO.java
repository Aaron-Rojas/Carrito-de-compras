package com.carritoCompra.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrdenDTO {
    private Long id;
    private LocalDateTime fecha;
    private BigDecimal total;
    private List<DetalleOrdenDTO> detalles;
}
