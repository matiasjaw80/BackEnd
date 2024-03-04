const express = require('express');
const ProductManager = require('./ProductManager')
const contenedor = new ProductManager("products.json");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = express.Router();


app.use('/products', router);

// GET /products
router.get('/', async (req, res) => {
    const products = await contenedor.getAll();
  
    // Limit the products to 3
    const limitedProducts = products.slice(0, 4); // Get the first 3 products
  
    res.status(200).json(limitedProducts); // Send only the limited products
  });


// GET /products/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await contenedor.getById(id);

    product
        ? res.status(200).json(product)
        : res.status(404).json({error: "Producto no encontrado"});
    
})


const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(` >> 🚀 Server started at http://localhost:${PORT}/products/`)
})

server.on('error', (err) => console.log(err));