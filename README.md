# API CRUD con TypeScript y Express

Esta es una plantilla básica para crear una API CRUD utilizando TypeScript y Express, junto con MongoDB para la base de datos.

Esta API está configurada para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MongoDB utilizando Express como framework y TypeScript para el tipado.

#### 1. Instalación de dependencias
Para instalar todos los paquetes, tipos y dependencias del proyecto:

```bash
npm install
```

#### 2. Configuración del Entorno

1. Copia el archivo `.env.example` y renómbralo a `.env`.
2. Rellena los valores en el archivo `.env` con tus credenciales.

```bash
cp .env.example .env
```

3. Edita el archivo `.env` y agrega tus variables de entorno:
```bash
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ACCOUNT_EMAIL=<your-email>
ACCOUNT_APP_PASSWORD=<your-google-app-password>
```

<hr />


## Rutas

- Crear un nuevo usuario
```bash
POST /api/users
Body:
{
  "nombre": "Nombre",
  "apellido": "Apellido",
  "email": "email@example.com",
  "telefono": "1234567890"
}
```

- Obtiene todos los usuarios
```bash
GET /api/users
Headers:
  x-api-key: api-key
```

- Obtener un usuario por ID
```bash
GET /api/users/:id
Headers:
  x-api-key: api-key
```

- Eliminar un usuario por ID
```bash
DELETE /api/users/:id
Headers:
  x-api-key: tu-api-key-aqui
```

- Actualizar un usuario por ID
```bash
PUT /api/users/:id
Headers:
  x-api-key: tu-api-key-aqui
Body:
{
  "nombre": "NuevoNombre",
  "apellido": "NuevoApellido",
  "email": "nuevoemail@example.com",
  "telefono": "0987654321"
}
```

- Registro de Usuario y Verificación de Email (para obtener la api key)
```bash
POST /register
Body:
{
  "nombre": "Nombre",
  "apellido": "Apellido",
  "email": "email@example.com",
  "telefono": "1234567890"
}
```
```bash
GET /verify-email?token=tu-token
```