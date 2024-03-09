const ProductManager = require('./ProductManager'); //Importo la clase

const PM = new ProductManager(`${__dirname}/products.json`, []);

const run = async () => {

    //Agregar 3 Productos
    await PM.addProduct({
        title: "titulo1",
        description: "descricpion1",
        price: 1000,
        image: "imagen1",
        code: "abc121",
        stock: 5
    });
    
    await PM.addProduct({
        title: "titulo2",
        description: "descricpion2",
        price: 2000,
        image: "imagen2",
        code: "abc122",
        stock: 10
    });

    await PM.addProduct({
        title: "titulo3",
        description: "descricpion3",
        price: 3000,
        image: "imagen3",
        code: "abc123",
        stock: 5
    });




    //consultar Todos Los Productos
    await PM.getProducts() 

    //consultar by ID
    await PM.getProductsById(2)

    //consultar by ID no encontrado
    await PM.getProductsById(4)

    //borrar producto by id
    await PM.deleteProductsById(3)

    //Actualizar un Producto By ID
    await PM.updateProducts({
        title: 'titulo1',
        description: 'descricpion1',
        price: 9999, //Ejemplo le cambio el precio
        image: 'imagen1',
        code: 'abc123',
        stock: 5,
        id: 1
    })

}

run();
