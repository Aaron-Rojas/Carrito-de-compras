# 1. IMAGEN BASE: Usamos una versión ligera de Java 21 (Eclipse Temurin es muy usada)
FROM eclipse-temurin:21-jdk-alpine

# 2. DIRECTORIO DE TRABAJO: Creamos una carpeta interna llamada /app
WORKDIR /app

# 3. COPIAR EL JAR: Tomamos el jar que generó Maven y lo metemos en la imagen
# Asegúrate de que tu Maven genere el jar en /target
COPY target/*.jar app.jar

# 4. PUERTO: Informamos que la app usa el 8080
EXPOSE 8080

# 5. COMANDO DE INICIO: Qué pasa cuando corre el contenedor
ENTRYPOINT ["java", "-jar", "/app/app.jar"]