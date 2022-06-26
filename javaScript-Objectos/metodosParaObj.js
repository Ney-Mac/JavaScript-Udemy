/*Metodos uteis para objectos

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Object.keys - retorna as chaves
Object.freeze - congela o objecto
Object.defineProperties - define varias propriedades
Object.defineProperty - define uma propriedade
*
const produto = {nome: 'Produto', preco: 200};
/*const caneca = {
    ...produto,
    material: 'Porcelana'
};*

const caneca = Object.assign({}, produto);

/*
caneca.nome = 'Caneca';
caneca.preco = 300;

console.log(produto);
console.log(caneca);*

console.log(Object.keys(produto));*/

const produto = {nome: 'Produto', preco: 1.8};

/*
Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
/*produto.nome = 'Outra coisa';
delete produto.preco;*/

//console.log(Object.values(produto));
//console.log(Object.entries(produto));

/*for(let entry of Object.entries(produto)){
    console.log(entry);
}*
produto.material = 'Porcelana';

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}*/

//OBS: for-in retorna os indices; 
//OBS: for-of retorna os valores das chaves

const nomes = [
    {nome: 'Mingo', idade: 10},
    {nome: 'Mango', idade: 20},
    {nome: 'Mando', idade: 30},
    {nome: 'Yeeba', idade: 40}
];

console.log(Object.values(nomes));
console.log(Object.keys(nomes));

for(let [chave, valor] of Object.entries(nomes)){
    console.log(chave, valor);
}