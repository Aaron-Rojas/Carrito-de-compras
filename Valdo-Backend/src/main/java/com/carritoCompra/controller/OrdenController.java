package com.carritoCompra.controller;

import com.carritoCompra.dto.CompraRequest;
import com.carritoCompra.model.Orden;
import com.carritoCompra.services.OrdenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ordenes")
@CrossOrigin(origins = "*")
public class OrdenController {

    @Autowired
    private OrdenService ordenService;

    @PostMapping

    public ResponseEntity<?> comprar(@RequestBody CompraRequest request) {
        try {
            Orden nuevaOrden = ordenService.generarOrden(request);
            return ResponseEntity.ok(nuevaOrden);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Orden>> listarHistorial(@PathVariable Long usuarioId) {
        List<Orden> historial = ordenService.listarPorUsuario(usuarioId);
        return ResponseEntity.ok(historial);
    }
}
