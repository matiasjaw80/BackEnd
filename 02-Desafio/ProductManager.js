const fs = require("fs");
//import { promises as fs } from "fs";
//import { request } from "http";

class ProductManager {

    constructor(fileName) {
        this.fileName = fileName;
        this.products = [];
    }


    static id = 0                   //inicializo en 0 la const del id

    //agregar producto
    addProduct = async (title, description, price, image, code, stock) => {


        ProductManager.id++         //incremento el id

        //defino el objeto newProduct
        let newProduct = {
            title,
            description,
            price,
            image,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct) //pusheo el nuevo producto

        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, "\t"));       //escribo en el archivo y convierto en formato string
            console.log("Archivo creado correctamente!");

        } catch (e) {
            console.error("Error al crear el Archivo\n", e);
        }
    };

    //fc para leer archivo y convertir en formato parse para ver como obj
    readProducts = async () => {
        try {
            let requestreadProducts = await fs.promises.readFile(this.fileName, "utf-8");        //leo todos los productos
            return JSON.parse(requestreadProducts)                                              //retorno un Objeto

        } catch (error) {
            console.error(error);

            return [];
        }
    };

    getProducts = async () => {
        let requestgetProducts = await this.readProducts();                         //asigno variable para esperar el await de readProducts     
        return console.log(requestgetProducts)                                      //retorno la lectura de los productos
    };

    // convertir en ternario el if, comprobar si existe
    getProductsById = async (id) => {
        let requestgetProductsById = await this.readProducts();                     //asigno variable para esperar el await de readProducts
        console.log(`<Request Search Product id: ${id}`);

        if (!requestgetProductsById.find(product => product.id === id)) {
            console.log(`>Result Request Product id: ${id} = NOT FOUND`)

        } else {
            console.log(`>Result  Search Product id: ${id} = FOUND`);
            console.log(requestgetProductsById.find(product => product.id === id)) //busco y filtro por el id igual al id que recibo por parametro
        }
    };

    //fc para escribir archivo y convertir en formato stringify para ver como obj
    writeProducts = async (product) => {
        try {
            let requestwriteProducts = await fs.promises.writeFile(this.fileName, JSON.stringify(product, null, "\t"))
            return JSON.stringify(requestwriteProducts);

        } catch (e) {
            console.error("Error al escribir el Producto\n", e);
        }
    };

    deleteProductsById = async (id) => {
        try {
            console.log(`<Request Delete Product id: ${id}`);
            let requestgetProductsById = await this.readProducts();                             //llamo fc para leer archivo
            let productFilter = requestgetProductsById.filter(products => products.id != id);   //filtro producto por id
            await this.writeProducts(productFilter);                                            //escribo los productos filtrados sin el que quiero borrar

            console.log(`>Result  Delete Product id: ${id} = DELETED OK`);

        } catch (e) {
            console.error("Error al borrar el Producto\n", e);
        }


    };

    updateProducts = async ({ id, ...product }) => {                               //traigo el nuevo producto modificado
        try {
            await this.deleteProductsById(id);                                      //elimina el id seleccionado
            console.log(`<Request Update Product id: ${id}`);

            let porductsOld = await this.readProducts();                            //guardo los demas productos
            let productUpdate = [{ ...product, id }, ...porductsOld];               //traigo el id más todos los demas productos

            await this.writeProducts(productUpdate);                                //escribo el producto actualizado junto a los demas sin modificar

            console.log(`>Result  Update Product id: ${id} = UPDATE OK`);
            this.getProductsById(id);                                               //Muestro el resultado de la modificacion


        } catch (e) {
            console.error("Error al actualizar el Producto\n", e);
        }


    };

}

//Exporto la clase
module.exports = ProductManager;