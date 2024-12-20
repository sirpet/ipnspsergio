const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Definir o caminho do arquivo index.html
    const filePath = path.join(__dirname, 'index.html');

    // Ler e servir o arquivo index.html
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Erro ao carregar a página.');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

// Definir a porta para o servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});