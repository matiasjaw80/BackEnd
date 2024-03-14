import express from 'express';

import { ProductManager } from './ProductManager.js';
const { Router } = express;
const router = Router();

let fileRoute = 'products';

let myProducts = new ProductManager(fileRoute);

router.get('/', (req, res) => {
    myProducts
        .getAll()
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.get('/:id', (req, res) => {
    myProducts
        .getById(parseInt(req.params.id))
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.post('/', (req, res) => {
    myProducts
        .save(req.body)
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.put('/:id', (req, res) => {
    myProducts
        .editById(parseInt(req.params.id), req.body)
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

router.delete('/:id', (req, res) => {
    myProducts
        .deleteById(parseInt(req.params.id))
        .then((e) => res.json(e))
        .catch((error) => console.log(error));
});

export default router;
