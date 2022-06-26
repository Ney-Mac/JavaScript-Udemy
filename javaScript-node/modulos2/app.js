//const multiplicacao = require('./mod');
//console.log(multiplicacao(2,2));

//const Cachorro = require('./mod');

//const cachorro = new Cachorro('Shiro');
//cachorro.latir();

//const path = require('path');
//console.log(__dirname);
//console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

//console.log(__filename);//nome do arquivo
//console.log(__dirname);//nome do direitorio que contem o arquivo

const Cachorro = require('./mod.js');
const c1 = new Cachorro('Shiro');
c1.latir();
