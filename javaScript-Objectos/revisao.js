/*const pessoa = {
    nome: 'Manuel',
    sobrenome: 'Armando Cariongo'
};*/

/*const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);*/

const pessoa1 = new Object();
pessoa1.nome = 'Mingo';
pessoa1.sobrenome = 'Chico';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return (`${this.nome} esta falando seu nome.`);
};
pessoa1.getDataNascimento = function(){
    const dataActual = new Date();
    return dataActual.getFullYear() - this.idade;
};
/*
for(let chave in pessoa1){
    console.log(pessoa1[chave]);
}*/

/*function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Manuel', 'Cariongo');
console.log(p1.nomeCompleto);*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Cariongo';
const p2 = new Pessoa('Maria', 'Miranda');

//Object.freeze(p1);

console.log(p1);
