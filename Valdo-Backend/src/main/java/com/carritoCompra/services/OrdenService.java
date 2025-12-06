package com.carritoCompra.services;

import com.carritoCompra.dto.CompraRequest;
import com.carritoCompra.model.DetalleOrden;
import com.carritoCompra.model.Orden;
import com.carritoCompra.model.Producto;
import com.carritoCompra.model.Usuario;
import com.carritoCompra.repository.OrdenRepository;
import com.carritoCompra.repository.ProductoRepository;
import com.carritoCompra.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrdenService {
    @Autowired
    private OrdenRepository ordenRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public Orden generarOrden(CompraRequest request) {

        Usuario usuario = usuarioRepository.findById(request.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Orden orden = new Orden();
        orden.setUsuario(usuario);
        orden.setFecha(LocalDateTime.now());
        orden.setDetalles(new ArrayList<>());

        BigDecimal totalOrden = BigDecimal.ZERO;

        for (CompraRequest.DetalleCompra item : request.getItems()){
            Producto producto = productoRepository.findById(item.getProductoId()).
                    orElseThrow(() -> new RuntimeException("Producto no encontrado"));

            if (producto.getStock() <= item.getCantidad()){
                throw new RuntimeException("Stock insuficiente para: " + producto.getNombre());
            }
            producto.setStock(producto.getStock() - item.getCantidad());
            productoRepository.save(producto);

            DetalleOrden detalleOrden = new DetalleOrden();
            detalleOrden.setProducto(producto);
            detalleOrden.setCantidad(item.getCantidad());
            detalleOrden.setPrecioUnitario(producto.getPrecio());
            detalleOrden.setOrden(orden);

            BigDecimal subtotal= producto.getPrecio().multiply(new BigDecimal(item.getCantidad()));
            detalleOrden.setSubTotal(subtotal);

            orden.getDetalles().add(detalleOrden);
            totalOrden = totalOrden.add(subtotal);
        }
        orden.setTotal(totalOrden);
        return ordenRepository.save(orden);
    }

    public List<Orden> listarPorUsuario(Long usuarioId) {
        return ordenRepository.findByUsuarioId(usuarioId);
    }
}
