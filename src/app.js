import express from 'express';

const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 1, "titulo": "Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Entrei na pagina principal!')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

export default app;