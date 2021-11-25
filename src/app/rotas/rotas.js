module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send(`
                <html>
                    <head>
                        <meta charset="uft-8">
                    </head>
                    <body>
                        <h1> Aula Alura 001 </h1>
                    </body>
                </html>
        `)
    });
    
    app.get('/livros', function(req, resp) {
        resp.marko(
            require('../view/livros/lista/lista.marko'),
            {
                livros : [
                    {
                        id: 1,
                        titulo: 'Fundamentos do node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }
        )
    });
}
