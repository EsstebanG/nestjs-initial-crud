# 🎬 Proyecto CRUD de Películas con NestJS

Este proyecto es una **API RESTful** desarrollada con **NestJS** que permite la **gestión completa de películas**.  
El sistema soporta operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) y está diseñado para mantener una arquitectura limpia, modular y escalable.

---

## 👥 Equipo de desarrollo

| Desarrollador | Rol | Responsabilidades principales |
|----------------|-----|--------------------------------|
| **Juan Esteban Castillo Guardia** | *Backend Lead / Arquitectura* | Configurar el entorno NestJS, estructura del proyecto, conexión a PostgreSQL, entidades y migraciones. |
| **Luis Fernando Rodríguez López** | *Desarrollador API / Lógica de Negocio* | Implementar controladores y servicios CRUD de películas. Añadir validaciones con `ValidationPipe` y `class-validator`. |
| **Juan Esteban Garzón Luján** | *DevOps / QA / Documentación* | Configurar Docker, flujo Gitflow, documentación con Swagger, y pipelines de CI/CD. |

---

## 🎯 Objetivo del proyecto

Desarrollar una API REST para gestionar una base de datos de **películas**, donde los usuarios puedan:

- Agregar nuevas películas.  
- Consultar todas las películas o una específica.  
- Actualizar información de una película existente.  
- Eliminar películas de la base de datos.  

---

## ⚙️ Tecnologías utilizadas

- **NestJS** – Framework principal del backend.  
- **TypeScript** – Lenguaje de desarrollo.  
- **PostgreSQL** – Base de datos relacional.  
- **TypeORM** – ORM para la persistencia de datos.  
- **Docker & Docker Compose** – Contenerización de servicios.  
- **Jest** – Framework de pruebas unitarias.  
- **Swagger** – Generación automática de documentación de API.  
- **Git & GitHub** – Control de versiones.  
- **ESLint + Prettier** – Estilo y calidad del código.  

---

## 🎬 Estructura de la base de datos

Entidad principal: **Movie**

| Campo | Tipo | Descripción |
|--------|------|-------------|
| `id` | `UUID` | Identificador único de la película. |
| `title` | `varchar(150)` | Título de la película. |
| `director` | `varchar(100)` | Nombre del director. |
| `releaseYear` | `int` | Año de estreno. |
| `genre` | `varchar(50)` | Género de la película. |
| `rating` | `decimal(2,1)` | Calificación (0.0 a 10.0). |
| `createdAt` | `timestamp` | Fecha de creación del registro. |
| `updatedAt` | `timestamp` | Fecha de última modificación. |

Posibles extensiones de la base de datos:
- Entidad **Review** para reseñas de usuarios.  
- Entidad **User** para autenticación y control de acceso.  

---

## 🧱 Estructura del proyecto

```bash
src/
├── main.ts
├── app.module.ts
├── movies/
│   ├── movies.module.ts
│   ├── movies.controller.ts
│   ├── movies.service.ts
│   ├── dto/
│   │   ├── create-movie.dto.ts
│   │   └── update-movie.dto.ts
│   ├── entities/
│   │   └── movie.entity.ts
│   └── tests/
│       └── movies.service.spec.ts
├── common/
│   ├── filters/
│   ├── interceptors/
│   └── pipes/
```

---

## 🧩 Distribución del trabajo

| Tarea | Asignado a | Descripción |
|--------|-------------|-------------|
| Configuración Nest + Docker | Juan Esteban Castillo Guardia | Inicializar proyecto, crear `Dockerfile` y `docker-compose.yml`, configurar conexión a PostgreSQL. |
| Implementación CRUD `movies` | Luis Fernando Rodríguez López | Implementar controladores, servicios y DTOs con validaciones. |
| Documentación Swagger + CI/CD | Juan Esteban Garzón Luján | Documentar endpoints y configurar GitHub Actions para testing automático. |

---

## 🌿 Flujo Git y ramas

Se sigue el modelo **Gitflow**:

- `main`: versión estable y lista para producción.  
- `develop`: rama de integración de nuevas características.  
- `feature/<nombre>`: ramas para desarrollo de nuevas funciones.  
- `fix/<nombre>`: corrección de errores.  
- `release/<versión>`: preparación para lanzamientos.

### Ejemplo de flujo

```bash
# Crear una nueva feature
git checkout -b feature/agregar-endpoint-peliculas

# Subir cambios
git add .
git commit -m "feat: endpoint CRUD de películas listo"
git push origin feature/agregar-endpoint-peliculas

# Crear Pull Request hacia develop
```

---

## 🐳 Configuración Docker

Archivo `docker-compose.yml`:

```yaml
version: '3.9'

services:
  db:
    image: postgres:16-alpine
    container_name: movies-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: movies
    ports:
      - '5432:5432'
    volumes:
      - pg_data:/var/lib/postgresql/data

  app:
    build: .
    container_name: movies-api
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:postgres@db:5432/movies
    ports:
      - '3000:3000'
    command: npm run start:dev

volumes:
  pg_data:
```

---

## 🧠 Cómo ejecutar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/<org>/movies-crud-nest.git

# Instalar dependencias
npm install

# Levantar el entorno
docker compose up --build

# Documentación Swagger disponible en
http://localhost:3000/api
```

---

## ✅ Cobertura mínima de pruebas

El proyecto debe mantener una cobertura mínima del **40%** en Jest.

```bash
npm run test:cov
```

---

## 📋 Notas finales

- Todos los PR deben revisarse antes de mergear a `develop`.  
- Se deben seguir los **Conventional Commits** (`feat:`, `fix:`, `refactor:`).  
- Las migraciones deben ejecutarse con `npm run typeorm migration:run`.  
- La base de datos debe reinicializarse y probarse antes de cada sprint.  
- Swagger se actualiza automáticamente con cada despliegue.

---
