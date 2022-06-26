const fs = require('fs').promises;

/*
flag:
    w - Sobrepoe o conteudo do arquivo
    a - Acresce os novos dados ao arquivo
*/
module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, {flag: 'w'});
}

