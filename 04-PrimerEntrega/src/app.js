import express from 'express';
import products from './products.js';
import carts from './carts.js';

const app = express();
const {json, urlencoded} = express;
app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('./public'))

app.use('/api/products', products);
app.use('/api/carts', carts);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(` >> 🚀 Server started at http://localhost:${PORT}/`)
})