class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposvalidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposvalidos && senhasValidas){
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Campos Senha e Repetir Senha devem ser iguais.');
            this.criaErro(repetirSenha, 'Campos Senha e Repetir Senha devem ser iguais.');
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, 'A Senha deve estar entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }
    

    camposSaoValidos(){
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `campo "${label}" nao pode estar vazio.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('user')){
                if(!this.validaUser(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUser(campo){
        const user = campo.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.criaErro(campo, 'usuario precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Usuario precisa conter apenas letras e/ou numeros');
            valid = false;
        }

        return valid;
    }

    validaCpf(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('beforebegin', div);
    }
}

const valida = new ValidaFormulario();