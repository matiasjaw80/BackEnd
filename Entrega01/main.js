class ProductManager {
    constructor(){
        this.products = [];
    }
    //inicializo en 0 la const del id
    static id = 0;
    //agregar producto
    addProduct(title, description, price, image, code, stock){
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }
        //defino el objeto
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
                ...newProduct,
                id: ProductManager.id,
            });
        }else{
            console.log("todos los campos son requeridos, no se pudo agregar el producto")
        }
    }

    getProducts(){
        return this.products;
        }
    
    existe(id) {
        return this.products.find((producto) => producto.id === id);
    }

    getProductsById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }  
}

//testing

const productos = new ProductManager
//primera llamada = arreglo vacio
console.log(productos.getProducts())

//agregamos producto
productos.addProduct('titulo1', 'descricpion1', 1000, "imagen1", "abc123", 5);
productos.addProduct('titulo2', 'descricpion2', 2000, "imagen2", "abc124");

//segunda llamada = arreglo con product
console.log(productos.getProducts())

//validacion de codigo repetido
productos.addProduct('titulo3', 'descricpion3', 2000, "imagen3", "abc124", 7);

//busqueda de producto por Id
productos.getProductsById(2);

//busqueda por id no encontrado
productos.getProductsById(5);