package com.carritoCompra.services;

import com.carritoCompra.model.Usuario;
import com.carritoCompra.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario crearUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Usuario buscarPorEmail(String email){
        return usuarioRepository.findByEmail(email).
                orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
