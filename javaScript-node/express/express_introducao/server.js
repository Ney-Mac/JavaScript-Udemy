const express = require('express');
const app = express();

//Operacoes basicas de uma API
//CRUD -> Creat Read Update Delete
//        POST  GET  PUT    Delete

/***** PESQUISAR SOBRE VERBOS HTTP ******/

app.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulario.');
});

app.get('/contacto', (req, res) =>{
    res.send('Obrigado por entrar em contacto com a gente.');
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});