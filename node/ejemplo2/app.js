const http = require('http');

const server = http.createServer((req, res) => {
    console.log("El cliente ha hecho una petición");
    res.end('<h1>Hola mundo</h1>');
});

server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});

