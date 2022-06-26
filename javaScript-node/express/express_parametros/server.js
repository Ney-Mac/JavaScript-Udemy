const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

//params: partes que vem na rota da url
//query: partes que vem na queryString (queryString: /?chave=valor&chave2=valor2)
//body: parte que vem no body da requisicao, quando usado o metodo POST


//req -> require
//res -> response
app.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"><br>
            Nome do cliente: <input type="text" name="outrocampo">
            <button>Enviar</button> 
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`O que voce enviou foi: ${req.body.nome}`);
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

