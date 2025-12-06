package com.carritoCompra.dto;

import lombok.Data;
import java.util.List;

@Data
public class CompraRequest {
    private Long usuarioId;
    private List<DetalleCompra> items;

    @Data
    public static class DetalleCompra {
        private Long productoId;
        private Integer cantidad;
    }
}

