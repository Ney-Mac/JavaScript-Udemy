exports.paginaInicial = (req, res) =>{
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"><br>
            Nome do cliente: <input type="text" name="outrocampo">
            <button>Enviar</button> 
        </form>
    `);
}

exports.trataPost = (req, res) =>{
    res.send('Ei, sou sua nova rota de post');
}