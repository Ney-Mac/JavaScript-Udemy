//Declaracao de funcao (Function hoisting)
    //Hoisting: a declaracao e transportada para o topo 
    //do codigo e por isso pode ser usada em qualquer 
    //parte do codigo
function oie(){
    console.log('Oie');
}

//First-class objects (Objectos de primeira classe)
//Function expression
const souUmDado = function(){
    console.log('Sou um dado');
}

function executaFuncao(funcao){
    console.log('Vou excutar sua funcao abaixo:');
    funcao();
}

//Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
}

//OBS: Todo o tipo de funcao pode ser tratada como um dado

//Dentro de um objecto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();