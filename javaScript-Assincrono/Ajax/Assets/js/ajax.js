const request = obj =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        });
    });
    /*const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText());
        }
    })*/
};

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
        const response = await request({
            method: 'GET',
            url: href
        });
        carregaResultado(response);
    }catch(error){
        console.log(error);
    }
}

/*function carregaPagina(el){
    const href = el.getAttribute('href');
    
    request({
        method: 'GET',
        url: href
    }).then(response =>{
        carregaResultado(response);
    }).catch(error => console.log(error));
}*/

function carregaResultado(response){
    const resultado = document.querySelector('.resultao');
    resultado.innerHTML = response;
}

/* *********************
    xhr.open(verbo_a_ser_usado, url, sincrono_ou_assincrono);
    true -> para assincrono
********************** */