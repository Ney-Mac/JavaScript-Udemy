class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} esta falando.`);
    }
    /*comer(){
        console.log(`${this.nome} esta comendo.`);
    }
    beber(){
        console.log(`${this.nome} esta bebendo.`);
    }*/
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`);
};

const p1 = new Pessoa('Manuel', 'Armando');
const p2 = new Pessoa2('Manuel', 'Cariongo');