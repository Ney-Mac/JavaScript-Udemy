function criaCalculadora(){
    return {

        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert('Conta invalida');
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                //OBS: Arrow Functions nao alteram o 
                //valor do this. Mantendo sempre o this
                // com valor da funcao pai
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }//Caso o btn clicado seja da classe num

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }//Caso o btn clicado seja o clear

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }//Caso o btn clicado seja del

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }//Caso o btn clicado seja o equal
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();