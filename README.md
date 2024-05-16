
# EliteWhey Nutrition API
Bienvenido a la API de EliteWhey Nutrition, una solución eficiente y robusta para gestionar productos y datos nutricionales. Esta API está construida en Node.js utilizando el framework Express.js.

# Requisitos

 - Node.js([v14 o superior](https://nodejs.org/en/download))
 - npm([v6 o superior](https://www.npmjs.com/)) o [yarn](https://yarnpkg.com/)

# Instalación local

Clona este repositorio

```bash
  git clone https://github.com/tu-usuario/elitewhey-nutrition-api.git
  cd elitewhey-nutrition-api

```

Instala las dependencias

```bash
  npm install

```

Iniciar el servidor

```bash
  npm start

```

La API estará disponible en http://localhost:3000

## API Referencias

#### Obtener todos los productos

```http
  GET /products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id para fetch producto |
| `title` | `string` | **Required**. Nombre del producto |
| `description` | `string` | **Required**. Descripción del producto |
| `photo` | `string` | **Required**. Foto del producto |
| `price` | `integer` | **Required**. Precio del producto |
| `categoryId` | `integer` | **Required**. Categoria del producto |
| `rating` | `number` | **Required**. Popularidad del producto |

#### Obtener un producto

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. Id para fetch producto |
| `title` | `string` | **Required**. Nombre del producto |
| `description` | `string` | **Required**. Descripción del producto |
| `photo` | `string` | **Required**. Foto del producto |
| `price` | `integer` | **Required**. Precio del producto |
| `categoryId` | `integer` | **Required**. Categoria del producto |
| `rating` | `number` | **Required**. Popularidad del producto |

#### Obtener categorias

```http
  GET /categories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id para fetch producto |
| `name` | `string` | **Required**. Nombre de categoria |

#### Obtener carrito

```http
  GET /api/cart
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `[]`      | `array` | **Required**. Objeto de producto |

## Authors

- [@mojial](https://github.com/mojial)
