const falar = {
    falar(){
        console.log(`${this.nome} esta falando`);
    },
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    },
}

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}

const pessoaPrototype = {...comer, ...beber, ...falar};
//Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},//nome
        sobrenome: {value: sobrenome},//sobrenome
    });
}

const p1 = criaPessoa('Manuel', 'Cariongo');
const p2 = criaPessoa('Joana', 'A.');
console.log(p2);