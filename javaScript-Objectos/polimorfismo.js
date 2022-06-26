function ContaBancaria(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaBancaria.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: valor a sacar: ${valor}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

ContaBancaria.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

ContaBancaria.prototype.verSaldo = function(){
    console.log(`Agencia: ${this.agencia}/Conta: ${this.conta} | Saldo: ${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
    ContaBancaria.call(this,agencia, conta, saldo);

    this.limite = limite;
}
ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constuctor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: valor a sacar: ${valor}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo){
    ContaBancaria.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype);
ContaPoupanca.prototype.constructor = ContaBancaria;

const  contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log();

const contaPoupanca = new ContaPoupanca(12, 33, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(110);
contaPoupanca.sacar(1);