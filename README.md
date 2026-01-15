# Blog API - Node.js

API REST para un blog desarrollada con **Node.js**, **Express** y **MongoDB**.  
(En una rama adicional se migrará a **MySQL** como práctica extra).

---

## Tecnologías usadas

- Node.js
- Express.js
- MongoDB + Mongoose
- MySQL (rama de migración)
- dotenv
- Git & GitHub

---

## Estructura del proyecto

```bash
Blog/
│ index.js
│ package.json
│ .env.example
└─database/
└─conexion.js
└─modelos/
└─rutas/
```

---

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/tu_repo.git
cd tu_repo
```
---

Instala dependencias:

```bash
npm install
```

Crea un archivo .env en la raíz:

```bash
PORT=3900
MONGO_URI=mongodb://localhost:27017/mi_blog
```

Inicia el servidor:

```bash
npm start
```
