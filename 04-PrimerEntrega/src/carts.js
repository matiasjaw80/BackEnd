import express from 'express';

import { ProductManager } from './ProductManager.js';
const { Router } = express;
const router = Router();

let fileRoute = 'carts';

let myCart = new ProductManager(fileRoute);

let myProducts = new ProductManager('products');

router.post('/', (req, res) => {
    myCart
        .save({})
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.delete('/:id', (req, res) => {
    myCart
        .deleteById(parseInt(req.params.id))
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.get('/:id/products', (req, res) => {
    myCart
        .getById(parseInt(req.params.id))
        .then((e) => {
            res.json(e);
        })
        .catch((error) => console.log(error));
});

router.post('/:id/products', (req, res) => {
    let cart;
    let body = req.body.id_prod;

    myCart
        .getById(parseInt(req.params.id))
        .then((e) => {
            cart = e.element;

            if (!cart.products) {
                cart.products = [];
            }

            body.forEach((id_prod) => {
                myProducts.getById(id_prod).then((e) => {
                    cart.products.push(e.element);
                });
            });

            myCart.addToElement(parseInt(req.params.id), cart).then((e) => {
                res.json({
                    response: 'Products Added to the Cart',
                    cart,
                });
            });
        })
        .catch((error) => console.log(error));
});

router.delete('/:id/products/:id_prod/', (req, res) => {
    myCart
        .getById(parseInt(req.params.id))
        .then((e) => {
            myCart
                .deleteByIdProduct(
                    parseInt(req.params.id),
                    parseInt(req.params.id_prod)
                )
                .then((e) => res.json(e))
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
});

export default router;
