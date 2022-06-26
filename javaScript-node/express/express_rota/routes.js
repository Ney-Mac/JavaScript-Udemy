const express = require('express');
const route = express.Router();//responsavel por tratar das rotas
const homeController = require('./controllers/homeController');
const contactoController = require('./controllers/contactoController');

//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contactos
route.get('/contacto', contactoController.paginaInicial);

module.exports = route;