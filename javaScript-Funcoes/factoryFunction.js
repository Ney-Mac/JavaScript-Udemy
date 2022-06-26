//Factory Function (Funcao fabrica) 
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,

        sobrenome,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        
        fala(assunto = 'falando sobre nada'){
            return `${this.nome} esta ${assunto}.`;
        },
        
        altura,
        
        peso,
        
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Manuel', 'Cariongo', 1.8, 80);
p1.nomeCompleto = 'Manuel Armando Cariongo';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());