# Curso "Programación Backend"
Curso de Coderhouse "Programación Backend" con Node.js

Clases con ECMAScript y ECMAScript avanzado

Consigna
*Realizar una clase “ProductManager” que gestione un conjunto de productos.

Aspectos a incluir
*Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío

Cada producto que gestione debe contar con las propiedades:
-title (nombre del producto)
-description (descripción del producto)
-price (precio)
-thumbnail (ruta de imagen)
-code (código identificador)
-stock (número de piezas disponibles)

Aspectos a incluir
*Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    -Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    -Al agregarlo, debe crearse con un id autoincrementable
*Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
*Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    -En caso de no coincidir ningún id, mostrar en consola un error “Not found”

*Testing
    -arreglo vacio
    -agregar producto
    -arreglo con product
    -validacion de codigo repetido
    -busqueda de producto por Id
    -busqueda por id no encontrado

Formato del entregable
    -Archivo de Javascript listo para ejecutarse desde node.
    -correr el comando node main.js en la Terminal de VS


by WERJMAN MATIAS   