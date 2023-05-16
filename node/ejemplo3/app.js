const http = require('http');

const server = http.createServer((req, res) => {
    console.log("El cliente ha hecho una petición");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end('<h1>Hola mundo</h1>');
});


const PUERTO = 3000;
server.listen( PUERTO, () => {
    console.log(`Servidor escuchando en puerto ${PUERTO}`);
});

