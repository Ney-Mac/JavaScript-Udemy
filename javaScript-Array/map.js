const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);

//console.log(dobro);

//Retorne cada elemento
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objecto
//Adicione uma chave id em cada objecto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(pessoa => pessoa.nome);
//console.log(nomes);

const idades = pessoas.map(pessoa => ({idade: pessoa.idade}));
//console.log(idades);

const comIds = pessoas.map((pessoa, indice) =>{
    const newObj = {...pessoa};
    newObj.id = indice + 1;
    return newObj;
});
//console.log(pessoas);
console.log(comIds);
