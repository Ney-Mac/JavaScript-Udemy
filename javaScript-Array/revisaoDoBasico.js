//Forma menos usada de declaracao de array (Funciona com todos os tipos de dados)
/*const nomes1 = new Array('Mingo', 'Chico', 'Toni');

//Forma mais usada
const nomes2 = ['Domingos', 'Francisco', 'Antonio'];

/*console.log(nomes1);
console.log(nomes2);

delete nomes1[2];

console.log(nomes1);
console.log(nomes2);*/

/*const novo = [...nomes1];
novo.pop();

console.log(nomes1);
console.log(novo);

console.log(nomes1.length);

const removido = nomes1.pop();

console.log(removido, nomes1);

nomes1.push('Joao');

console.log(nomes1);

nomes1.unshift('Manuel');
console.log(nomes1);

const novo2 = nomes1.slice(1, 3);
console.log(novo2);*/
/*
const nome = 'Manuel Armando Cariongo';
const nomes = nome.split(' ');*/

const nomes = [ 'Manuel', 'Armando', 'Cariongo' ];
const nome = nomes.join(' ');

console.log(nome);