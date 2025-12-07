FROM node:18-alpine as build

WORKDIR /app

# Copiamos package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Construimos la app para producción (Genera carpeta /build)
RUN npm run build

# ETAPA 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copiamos la configuración de Nginx que creamos
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos compilados de React al servidor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80 (el estándar web)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]