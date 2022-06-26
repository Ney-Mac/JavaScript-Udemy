const nome = ['Luiz', 'Otavio', 'Henrique'];

/*for(let i in nome){//For In
    console.log(nome[i]);
}*/

for(let valor of nome){
    console.log(valor);
}

console.log('----------------------');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
});