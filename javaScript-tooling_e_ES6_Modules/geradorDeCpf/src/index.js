import geraCPF from './modules/geraCpf';
import './Assets/css/index.css';
import GeraCPF from './modules/geraCpf';

(function (){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();