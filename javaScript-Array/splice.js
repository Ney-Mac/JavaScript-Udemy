const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

/*
nomes.splice(
    indice 0: Em qual indice quero comecar a mexer no array,
    indice 1: Quantos elementos do array quero remover,
    indice 2 ... inice n: Elementos para adicionar no array
)
*/
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);