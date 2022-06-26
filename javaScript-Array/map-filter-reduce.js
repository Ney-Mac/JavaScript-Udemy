//Retorne a soma do dobro de todos os pares
const numeros = [5, 50,  80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
const pares = numeros.filter(num => num%2 === 0);
const dobro = pares.map(num => num*2);
const soma = dobro.reduce((ac, val) => ac+=val)
console.log(pares)
console.log(dobro);
console.log(soma);*/
const somaDobroPares = numeros
    .filter(num => num%2 === 0)
    .map(num => num*2)
    .reduce((ac, num) => ac + num);
console.log(somaDobroPares);