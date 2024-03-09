# Desafío 03

### Consignas

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

*En detalle, que incorpore las siguientes rutas:

##
Aspectos a incluir
- Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos.

- Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.

- El servidor debe contar con los siguientes endpoints: 
    - ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.

- Si no se recibe query de límite, se devolverán todos los productos

- Si se recibe un límite, sólo devolver el número de productos solicitados

    - ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 

##


## Para probar puedes realizar lo siguiente

1. Estar en el directorio de **'Desafio03'**

2. Instalar dependencias con: `npm install`

3. Instalar dependencias con: `npm install express`

4. Iniciar el servidor con `nodemon app.js`

----

### `GET | http://localhost:8080/products`

✅ *Respuesta:*

```json
[
    {
		"title": "titulo1",
		"description": "descricpion1",
		"price": 1111,
		"thumbnail": "imagen1",
		"code": "abc111",
		"stock": 5,
		"id": 1
    },
    {
		"title": "titulo2",
		"description": "descricpion2",
		"price": 2222,
		"thumbnail": "imagen2",
		"code": "abc222",
		"stock": 6,
		"id": 2
    }
.
.
.   
]
```
### `GET | http://localhost:8080/products/:id`

Para `http://localhost:8080/products/3`

✅ *Respuesta:*

```json
    {
		"title": "titulo3",
		"description": "descricpion3",
		"price": 3333,
		"thumbnail": "imagen3",
		"code": "abc333",
		"stock": 9,
		"id": 3
    }
```

Para un ID que no está presente, por ejemplo: `http://localhost:8080/products/333`

❌ *Respuesta:*

```json
{
    "error": "Producto no encontrado"
}
```