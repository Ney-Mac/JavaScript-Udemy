//Escreva uma funcao chamada ePaisagem que recebe dois
// argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura >= altura;

console.log('Paisagem: ',ePaisagem(1080,1920));