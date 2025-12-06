package com.carritoCompra.controller;

import com.carritoCompra.model.Producto;
import com.carritoCompra.services.ProductoService;
import com.carritoCompra.dto.CompraRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class InventarioController {

    private static final Logger log = LoggerFactory.getLogger(InventarioController.class);

    @Autowired
    private ProductoService productoService;

    @GetMapping("/productos")
    public ResponseEntity<List<Producto>> listarProductos(){
        log.info("📌 Solicitud recibida: Listar todos los productos");

        List<Producto> lista = productoService.listarTodos();
        log.info("✅ Se encontraron {} productos", lista.size());

        return ResponseEntity.ok(productoService.listarTodos());
    }


}
