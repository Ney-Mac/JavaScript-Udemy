function validaCPF(cpf){
    cpf = cpf.replace(/\D+/g, '');

    if(typeof cpf === 'undefined') return false;
    if(cpf.length !== 11) return false;
    if(isSequencia(cpf)) return false;

    const cpfParcial = cpf.slice(0, -2);
    const digito1 = criaDigito(cpfParcial);
    const digito2 = criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 +digito2;

    return novoCpf === cpf;
}

function isSequencia(cpf){
    return cpf[0].repeat(cpf.length) === cpf;
}

function criaDigito(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let contRegressiva = cpfArray.length + 2;
    const total = cpfArray.reduce((ac, val) =>{
        contRegressiva--;
        return ac += (contRegressiva * Number(val));
    }, 0);

    const digito = 11 - (total % 11);

    return (digito > 9)? '0' : String(digito);
}

const cpf = validaCPF('705.484.450-52');
if(cpf){
    console.log('Cpf valido');
}else console.log('Cpf invalido');