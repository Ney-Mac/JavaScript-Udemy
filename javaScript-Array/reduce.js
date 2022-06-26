/*
    Parametros da funcao reduce:
        1: acomulador;
        2: valor actual;
        3: indice actual;
        4: array;
*/
//Some todos os numeros
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acomulador, valor) =>{
    acomulador += valor;
    return acomulador;
}, 0);
//console.log(total);

const pares = numeros.reduce((acomulador, valor) =>{
    if(valor%2 === 0) acomulador.push(valor);
    return acomulador;
}, []);
//console.log(pares);
/*const paresFilter = numeros.filter(valor => (valor%2 === 0));
console.log(paresFilter);*/

const dobro = numeros.reduce((acomulador, valor) =>{
    acomulador.push(valor * 2);
    return acomulador;
}, []);
//console.log(dobro);
/*const dobroMap = numeros.map(valor => (valor * 2));
console.log(dobroMap);*/



//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const pessoaMaisVelha = pessoas.reduce((acomulador, pessoa) =>{
    if(pessoa.idade > acomulador.idade) return pessoa;
    return acomulador;
});
console.log(pessoaMaisVelha);