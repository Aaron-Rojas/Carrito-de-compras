package com.carritoCompra.dto;

import lombok.Data;

@Data
public class CompraRequest {
    private Long usuarioId;
    private Long productoId;
    private Integer cantidadSolicitada;

}
