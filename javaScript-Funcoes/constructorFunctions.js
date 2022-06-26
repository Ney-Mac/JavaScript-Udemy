//Funcao construtora retorna objectos
//Na funcao construtora o nome inicia sempre com maiuscula

function Pessoa(nome, sobrenome){
    //Atributos ou Metodos Privados -> Somente acessivei dentro da funcao
    const ID = 123456;
    const metodoInterno = () =>{

    };

    //Atributos ou Metodos Publicos -> Podem ser acedidos de fora da funcao
    // pela forma: nomeInstancia.nomeAtrubuto;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um metodo');
    }
}
const p1 = new Pessoa('Manuel','Cariongo');
const p2 = new Pessoa('Sonia Maria', 'Armando');

p2.metodo();