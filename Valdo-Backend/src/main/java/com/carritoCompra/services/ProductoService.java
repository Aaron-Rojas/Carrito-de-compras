package com.carritoCompra.services;

import com.carritoCompra.model.Producto;
import com.carritoCompra.repository.ProductoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> listarTodos(){
        return productoRepository.findAll();
    }

    public Producto obtenerPorId(Long id){
        return productoRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }


    @Transactional
    public Producto reducirStock(Long id, Integer cantidad){
        Producto producto = obtenerPorId(id);
        if (producto.getStock() < cantidad){
            throw new RuntimeException("Stock insuficiente para ese producto"+ producto.getNombre());
        }
        producto.setStock(producto.getStock()-cantidad);
        return productoRepository.save(producto);
    }

    public Producto guardarProducto(Producto producto){
        return productoRepository.save(producto);
    }

}
