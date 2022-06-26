function Calculadora(){
    this.inicia = () => {
        cliqueBotoes();
        capEnter();
    };

    const display = document.querySelector('.display');

    capEnter = () => {
        document.addEventListener('keyup', e =>{
            if(e.keyCode === 13) realizaConta();
        })
    }

    cliqueBotoes = () => {
        document.addEventListener('click', (e) =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) colocaNumDisplay(el.innerText);
            if(el.classList.contains('btn-del')) del();
            if(el.classList.contains('btn-clear')) clear();
            if(el.classList.contains('btn-eq')) realizaConta();
        });
    };

    realizaConta = () => {
        let conta = display.value;

        try{
            conta = eval(conta);

            if(!conta){
                alert('Operacao invalida');
                return;
            }

            display.value = conta;
            display.focus();

        }catch(e){
            alert('Operacao invalida');
            return;
        }
    };

    clear = () => {
        display.value = '';
        display.focus();
    }
    colocaNumDisplay = (valor) => {
        display.value += valor;
        display.focus();
    }
    del = () =>{
        display.value = display.value.slice(0, -1);
        display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();