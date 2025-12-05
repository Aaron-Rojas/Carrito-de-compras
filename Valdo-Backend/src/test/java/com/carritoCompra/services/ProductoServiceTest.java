package com.carritoCompra.services;

import com.carritoCompra.model.Producto;
import com.carritoCompra.repository.ProductoRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {
    @Mock
    private ProductoRepository productoRepository;

    @InjectMocks
    private ProductoService productoService;

    @Test
    public void reducirStockStockInsuficienteDebeRestar() {
        //1 ARRANGE
        Long idProducto = 1L;
        Producto productoMock = new Producto();
        productoMock.setId(idProducto);
        productoMock.setNombre("Casaca");
        productoMock.setStock(10);

        // Cuando el repositorio busque el ID 1
        when(productoRepository.findById(idProducto)).thenReturn((Optional.of(productoMock)));

        // Cuando guarde el producto, devuelve el mismo producto
        when(productoRepository.save(any(Producto.class))).thenReturn(productoMock);

        //2 ACT
        Producto resultado = productoService.reducirStock(idProducto,3);

        //3 ASSERT
        assertNotNull(resultado);
        assertEquals(resultado.getStock(),7);
        verify(productoRepository, times(1)).save(any(Producto.class)); // Verificar si llamó a la BD
    }

    @Test
    public void reducirStockStockInsuficienteException() {
        Long idProducto = 1L;
        Producto productoMock = new Producto();
        productoMock.setId(idProducto);
        productoMock.setNombre("Casaca");
        productoMock.setStock(2);
        when(productoRepository.findById(idProducto)).thenReturn((Optional.of(productoMock)));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            productoService.reducirStock(idProducto,3);
        });

        assertTrue(exception.getMessage().contains(("Stock insuficiente para ese producto")),exception.getMessage());
        verify(productoRepository, never()).save(any(Producto.class)); // Verificamos que NUNCA se guardó nada en la BD

    }

}