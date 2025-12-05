package com.carritoCompra.controller;

import com.carritoCompra.model.Producto;
import com.carritoCompra.services.ProductoService;
import com.carritoCompra.dto.CompraRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class InventarioController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/productos")
    public ResponseEntity<List<Producto>> listarProductos(){
        return ResponseEntity.ok(productoService.listarTodos());
    }

    @PostMapping("/compras")
    public ResponseEntity<?> realizarCompra(@RequestBody CompraRequest request){
        try{
            Producto productoActualizado = productoService.reducirStock(
                    request.getProductoId(),
                    request.getCantidadSolicitada()
            );
            return ResponseEntity.ok(productoActualizado);
        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
