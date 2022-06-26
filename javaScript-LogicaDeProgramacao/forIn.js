const frutas = ['Pera', 'Maca', 'Uva'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

/*for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i]);
}*/

//For in le indeces ou chaves do objecto
for(let chave in pessoa){
    console.log(chave);
}