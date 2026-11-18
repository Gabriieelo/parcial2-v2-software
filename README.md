
# Parcial 2 - Software

**Alumno:** Gabriel Delgado  
**Fecha:** 18/11/2026

## Descripción
Aplicación web sencilla para gestionar tareas.

## Tecnologías
- HTML
- CSS
- JavaScript
- Docker
- Nginx Alpine
- Git y GitHub

## Instrucciones de ejecución

### Construir la imagen Docker
```bash
docker build -t gestion-tareas .
```

### Iniciar el contenedor
```bash
docker run -d -p 8080:80 --name tareas-app gestion-tareas
```

### Acceder a la aplicación
Abrir en el navegador:
http://localhost:8080

### Detener el contenedor
```bash
docker stop tareas-app
```
