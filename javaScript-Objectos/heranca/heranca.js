function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}
//********************************************

function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

Camisa.prototype.aumento = function(percentual){
    this.preco += this.preco * (percentual/100);
}
//**********************************************

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => estoque,
        set: function(valor){
            if(typeof(valor) !== 'number') return;
            estoque = valor;
        },
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

//***********************************************

const produto = new Produto('Gen', 111);
const camisa = new Camisa('Regata', 7.5, 'preta');
const caneca = new Caneca('Caneca', 13, 'plastico', 5);

console.log(produto);
console.log(camisa);
console.log(caneca);