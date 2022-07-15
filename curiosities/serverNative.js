/* O import nativo com nodeJs usa o método "require" (CommonJS module).
   Existe a opção da "importção por modulos" (ES module). 
   Basta adicionar no arquivo package.json a linha -> "type": "module"
*/

const http = require("http");
const port = 3000;

const mockBooks = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Hobbit"},
    {id: 3, "titulo": "Harry Potter"}
];

const rotas = {
    "/": "Entrei na pagina principal",
    "/livros": mockBooks,
}

const server = http.createServer((req, res) => {
    response = rotas[req.url];
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor nativo escutando em http://localhost:${port}`);
})