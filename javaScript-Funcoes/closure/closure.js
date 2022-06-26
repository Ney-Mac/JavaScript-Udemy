function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);

//Closure: Abilidade da funcao de acessar o seu escopo lexico