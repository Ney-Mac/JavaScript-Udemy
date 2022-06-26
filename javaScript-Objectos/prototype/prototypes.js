function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Manuel', 'C.');
const pessoa2 = new Pessoa('Juliana', 'P.');
const data = new Date();

console.log(pessoa1);
//console.log(pessoa2);
console.log(data);