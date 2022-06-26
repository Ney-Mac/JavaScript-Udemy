function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writeble: false, //Pode ou nao alterar o valor
        configurable: true //configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writeble: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writeble: true,
            configurable: true
        },
    });
}

const p1 = new Produto('Camisola','20','3');
console.log(p1);

for(let chave in p1){
    console.log(chave);
}