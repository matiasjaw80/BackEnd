class ProductManager {
    constructor(){
        this.products = [];
    }
    //inicializo en 0 la const del id
    static id = 0;
    //agregar producto
    addProduct(title, description, price, image, code, stock){


        //funcion si hay un duplicado
        function hasDuplicateCode(products, code) {
            // Usa el método some() para iterar y retornar al encontrar una coincidencia si code esta repetido
            return products.some((product) => product.code === code);
          }
          
          //asigno a const = asDuplicateCode
          const duplicateFound = hasDuplicateCode(this.products, code);
          
          //si es verdadero que hay un duplicado
          if (duplicateFound) {
            console.log(`El código ${code} está repetido.`);
            }

        // Usa for para iterar y retornar al encontrar una coincidencia si code esta repetido
        // for (let i = 0; i < this.products.length; i++) {
        //     if (this.products[i].code === code) {
        //         console.log(`El codigo ${code} esta repetido`);
        //         break;
        //     }
        //}

        //defino el objeto newProduct
        const newProduct = {
             title,
             description,
             price,
             image,
             code,
             stock,
        }

        //si no encuentro ningun dato faltante lo agrega
        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++
            this.products.push({
                ...newProduct, //spread operator - llamo la funcion
                id: ProductManager.id,
            });
        }else{
            console.log("todos los campos son requeridos, no se pudo agregar el producto")
        }
    }
    //traer productos
    getProducts(){
        return this.products;
        }
    //Si existe el mismo code
    hasExists(id) {
        return this.products.find((producto) => producto.id === id);
    }
    //Trae el producto by id pero valida si existe primero
    getProductsById(id) {
        !this.hasExists(id) ? console.log("Not Found") : console.log(this.hasExists(id));
    }  
}

//*******************************testing*******************************

const productos = new ProductManager
//primera llamada = arreglo vacio
console.log("*primera llamada = arreglo vacio:")
console.log(productos.getProducts())

//agregamos producto
console.log("*agregamos producto:")
productos.addProduct('titulo1', 'descricpion1', 1000, "imagen1", "abc123", 5);
console.log(productos.getProducts())

//intentar agregar producto que le falte un dato
console.log("*intentar agregar producto que le falte un dato:")
productos.addProduct('titulo2', 'descricpion2', 2000, "imagen2", "abc124");

//segunda llamada = arreglo con product
console.log("*segunda llamada = arreglo con product:")
console.log(productos.getProducts())

//validacion de codigo repetido
console.log("*validacion de codigo repetido:")
productos.addProduct('titulo3', 'descricpion3', 2000, "imagen3", "abc123", 7);

//busqueda de producto por Id
console.log("*busqueda de producto por Id:")
productos.getProductsById(2);

//busqueda por id no encontrado
console.log("*busqueda por id no encontrado:")
productos.getProductsById(5);