
document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    const href = el.getAttribute('href');
    
    try{
        const response = await fetch(href);
        const html = await response.text();
        
        if(response.status !== 200) throw new Error('ERRO 404');
        
        carregaResultado(html);
    }catch(e){
        console.log(e);
    }

    /*fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error('ERRO 404');
            return response.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
    */
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultao');
    resultado.innerHTML = response;
}

/*fetch('pagina4.html')
    .then(resposta =>{
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));
*/