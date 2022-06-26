/*
const nome = 'Manuel';
const sobrenome = 'Armando Cariongo';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
console.log(module.exports);

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
*/

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

//exports.Pessoa = Pessoa;
const nome = 'Manuel';
const sobrenome = 'A. Cariongo';

module.exports = { nome, sobrenome, Pessoa};