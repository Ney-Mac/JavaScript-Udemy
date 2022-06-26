/*
    Escreva uma funcao que retorne um numero e retorne o
    seguinte: 
        Numero e divisivel por 3 = Fizz
        Numero e divisivel por 5 = Buzz
        Numero e divisivel por 3 e 5 = FizzBuzz
        Numero nao e divisivel por 3 e 5 = retorna o proprio numero
        Checar se o numero e realmente um numero = retornar o proprio numero
        Use a funcao com numero de 0 a 100
*/
function fizzBuzz(num){
    if(typeof(num)!=="number") return num;
    if(num%3 === 0 && num%5 === 0)  return 'FizzBuzz';
    if(num%3 === 0) return 'Fizz';
    if(num%5 === 0) return 'Buzz';
    return num;
}

for(let i = 0; i <= 100; i++){
    console.log(i,fizzBuzz(i));
}