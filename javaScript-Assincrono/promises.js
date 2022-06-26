function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof(msg) !== 'string'){
            reject('Erro');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' passei na promise');
            return;
        }, tempo);
    });
}

/*espera('Frase 1', rand(1, 3)).then((resposta) =>{
    console.log(resposta);
    return espera(22222, rand(1, 3));
}).then((resposta) =>{
    console.log(resposta);
    return espera('Frase 3', rand(1, 3));
}).then((resposta) =>{
    console.log(resposta);
})
.catch(e => {
    console.log('ERRO', e);
});*/

/*Metodos uteis para promises (Consultar o documento oficial do js)
    Promise.all - resolve todas as promesas no array, e retorna um array com todas elas ja resolvidas
    Promise.race - retorna a primeira promessa resolvida no array
    Promise.resolve
    Promise.Reject
*/

/*const promises = [
    'Primeiro Valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    //espera(1000, 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(valor =>{
        console.log(valor);
    })
    .catch(erro =>{
        console.log(erro);
    });
//console.log(promises);*/

const promises = [
    espera('Promise 1', rand(1, 5)),
    espera('Promise 2', rand(1, 5)),
    espera('Promise 3', rand(1, 5)),
];
/*
Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
//*/

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('A pagina em cache');
    }

    return espera('Baixei a pagina.', 3000);
}

baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina);
    })
    .catch(erro => console.log('Erro ' + erro));
//