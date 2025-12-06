package com.carritoCompra.services;

import com.carritoCompra.dto.CompraRequest;
import com.carritoCompra.dto.DetalleOrdenDTO;
import com.carritoCompra.dto.OrdenDTO;
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
import java.util.stream.Collectors;

@Service
public class OrdenService {
    @Autowired
    private OrdenRepository ordenRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;


    @Transactional
    public OrdenDTO generarOrden(CompraRequest request) {

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
        Orden ordenGuardada =  ordenRepository.save(orden);
        return convertirADTO(ordenGuardada);
    }

    public List<OrdenDTO> listarPorUsuario(Long usuarioId) {
        return ordenRepository.findByUsuarioId(usuarioId).stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    private OrdenDTO convertirADTO(Orden orden) {
        OrdenDTO dto = new OrdenDTO();
        dto.setId(orden.getId());
        dto.setFecha(orden.getFecha());
        dto.setTotal(orden.getTotal());

        List<DetalleOrdenDTO> detallesDTO = orden.getDetalles().stream()
                .map(detalle -> {
                    DetalleOrdenDTO d = new DetalleOrdenDTO();
                    d.setProductoId(detalle.getProducto().getId());
                    d.setNombreProducto(detalle.getProducto().getNombre());
                    d.setImagenProducto(detalle.getProducto().getImagen());
                    d.setCantidad(detalle.getCantidad());
                    d.setPrecioUnitario(detalle.getPrecioUnitario());
                    d.setSubTotal(detalle.getSubTotal());
                    return d;
                }).collect(Collectors.toList());

        dto.setDetalles(detallesDTO);
        return dto;
    }

    public List<OrdenDTO> listarHistorialDTO(Long usuarioId) {
        return ordenRepository.findByUsuarioId(usuarioId)
                .stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

}
