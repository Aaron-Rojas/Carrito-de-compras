package com.carritoCompra.controller;

import com.carritoCompra.dto.CompraRequest;
import com.carritoCompra.model.Orden;
import com.carritoCompra.services.OrdenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ordenes")
@CrossOrigin(origins = "*")
public class OrdenController {

    private static final Logger log = LoggerFactory.getLogger(InventarioController.class);

    @Autowired
    private OrdenService ordenService;

    @PostMapping

    public ResponseEntity<?> comprar(@RequestBody CompraRequest request) {
        log.info("🛒 COMPRA: Iniciando proceso de compra para Usuario ID: {}", request.getUsuarioId());
        log.info("📦 ITEMS: Cantidad de productos en carrito: {}", request.getItems().size());

        try {
            Orden nuevaOrden = ordenService.generarOrden(request);
            log.info("✅ COMPRA EXITOSA: Orden #{} creada. Total: {}", nuevaOrden.getId(), nuevaOrden.getTotal());
            return ResponseEntity.ok(nuevaOrden);
        } catch (RuntimeException e) {
            log.error("❌ ERROR EN COMPRA: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Orden>> listarHistorial(@PathVariable Long usuarioId) {
        log.info("📜 HISTORIAL: Solicitando compras del Usuario ID: {}", usuarioId);
        List<Orden> historial = ordenService.listarPorUsuario(usuarioId);
        log.info("✅ HISTORIAL: Se encontraron {} órdenes previas.", historial.size());
        return ResponseEntity.ok(historial);
    }
}
