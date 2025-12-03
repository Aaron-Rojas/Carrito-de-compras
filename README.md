# Carrito-de-compras
Este repositorio es para el curso de Herramientas de Desarrollo.
## Objetivo del proyecto
Desarrollar una aplicación web funcional que permita agregar, eliminar y actualizar productos dentro de un carrito de compras, garantizando una buena experiencia de usuario y un flujo de trabajo colaborativo con control de versiones en GitHub.
## Fases y Sprints del Proyecto

| **Sprint** | **Fase** | **Issues** | **Descripción general** |
|-------------|-----------|-------------|--------------------------|
| **Sprint 1** | MVP inicial | #1–#10 | Definición del alcance, toma de requerimientos y base del proyecto. |
| **Sprint 2** | MVP ampliado | #24–#32 | Mejora e integración de módulos adicionales. |
| **Sprint 3** | Frontend | #33–#41 | Desarrollo de la interfaz gráfica y conexión visual con el backend. |
| **Sprint 4** | Pruebas | #11–#23 | Validación de componentes y verificación del flujo general del sistema. |


# 🛒 Sistema de Inventario VALDO (Backend)

Este repositorio contiene el backend del módulo de carrito de compras y gestión de inventario para la empresa VALDO, desarrollado con **Java Spring Boot**.

## 📋 Prerrequisitos

Antes de iniciar, asegúrate de tener instalado lo siguiente en tu equipo:

* **Java JDK 21** (Versión LTS requerida).
* **Maven** (O usar el wrapper `./mvnw` incluido en el proyecto).
* **MySQL Server** (Corriendo en el puerto 3306).
* **Git**.

---

## ⚙️ Configuración de Base de Datos (Importante)

El proyecto **no crea la base de datos automáticamente**, debes crearla manualmente antes de ejecutar la aplicación para evitar errores de conexión.

1.  Abre tu cliente de MySQL (Workbench, DBeaver o Consola).
2.  Ejecuta el siguiente script SQL:

```sql
CREATE DATABASE valdo_db;
USE vaddo_db:
```

Verifica tus credenciales: El proyecto está configurado por defecto para usar:
Usuario: root

Contraseña: root

Si tu contraseña local es diferente, debes editar el archivo src/main/resources/application.yaml:
aplication.yaml
```YAML
spring:
  datasource:
    username: root
    password: TU_CONTRASEÑA_AQUI
```
🚀 Cómo Ejecutar el Proyecto
Sigue estos pasos para levantar el servidor backend.

1. Clonar el repositorio
Bash
```git
git clone <URL_DEL_REPOSITORIO>
```
cd valdo-inventario

3. Ejecutar la aplicación

En Windows (CMD o PowerShell):
Bash
```cmd
mvn spring-boot:run
En Linux / Mac:
```
Bash
```cmd
chmod +x mvnw
./mvnw spring-boot:run
```

Una vez veas el mensaje Tomcat started on port(s): 8080, el servidor estará listo y conectado a la base de datos.
