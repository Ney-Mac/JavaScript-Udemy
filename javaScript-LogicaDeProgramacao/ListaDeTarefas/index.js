const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){//Cria uma nova li para usar no HTML
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();//Recebe uma nova li
    li.innerText = textoInput;//Adiciona o texto para a li
    tarefas.appendChild(li);//coloca a li dentro da ul
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

btnTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const  listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
       criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();