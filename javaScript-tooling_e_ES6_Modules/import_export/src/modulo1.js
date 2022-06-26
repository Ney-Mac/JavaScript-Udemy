const nome = 'Manuel';
const sobrenome = 'Armando Cariongo';
const idade = 21;
const cpf = 'asdfgfds';

function soma(x, y){
    return x + y;
}

//export {nome as nome2, sobrenome, idade, soma};

/*export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}*/
export default (x, y) => x * y;

export {nome, sobrenome, idade, soma};