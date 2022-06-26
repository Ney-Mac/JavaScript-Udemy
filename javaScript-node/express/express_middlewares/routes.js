const express = require('express');
const route = express.Router();//responsavel por tratar das rotas
const homeController = require('./src/controllers/homeController');
const contactoController = require('./src/controllers/contactoController');

function meuMiddleware(req, res, next){
    console.log();
    console.log('Passei no seu middleware.');
    console.log();
    next();
}

//Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contactos
route.get('/contacto', contactoController.paginaInicial);

module.exports = route;