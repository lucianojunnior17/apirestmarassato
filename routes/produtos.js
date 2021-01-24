const express = require('express');
const { router } = require('../app');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando GET dentro da rotas de produtos'
    });
});

routes.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando rota POST dentro  de produtos'
    });
});

/* routes.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        message: 'Usando GET de Um produto especifico',
        id: id
    });
});
*/
module.exports = routes;