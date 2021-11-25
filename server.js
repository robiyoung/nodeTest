const app = require('./src/config/custom-express')

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000')
});



/* const http = require('http');

const server = http.createServer(function (req, resp){
    
    let html = '';
    if(req.url == '/'){
        html=(`
            <html>
                <head>
                    <meta charset="uft-8">
                </head>
                <body>
                    <h1> Aula Alura 01 </h1>
                </body>
            </html>
        `);
    } else if(req.url == '/livros'){
        html=(`
            <html>
                <head>
                    <meta charset="uft-8">
                </head>
                <body>
                    <h1> Listagem de Livros </h1>
                </body>
            </html>
        `);
    }

    resp.end(html);
});
server.listen(3000); */