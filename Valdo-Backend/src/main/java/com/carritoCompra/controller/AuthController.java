package com.carritoCompra.controller;

import com.carritoCompra.dto.LoginRequest;
import com.carritoCompra.model.Usuario;
import com.carritoCompra.repository.UsuarioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(InventarioController.class);

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        log.info("🔐 LOGIN: Intento de acceso para email: {}", request.getEmail());
        var usuarioOpt = usuarioRepository.findByEmailAndPassword(request.getEmail(), request.getPassword());

        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            log.info("✅ LOGIN EXITOSO: Bienvenido Usuario ID: {} ({})", usuario.getId(), usuario.getNombre());
            usuario.setPassword(null);
            return ResponseEntity.ok(usuario);
        } else {
            log.warn("⛔ LOGIN FALLIDO: Credenciales incorrectas para: {}", request.getEmail());
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }
}
