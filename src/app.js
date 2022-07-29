import express from 'express';
import pokemonClient from './client/pokeApiClient.js'

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

// usar routes do express
app.get(`/pokemon/:name`, async (req, res) => {
    let pokemon = await pokemonClient.getPokemonByName(req.params.name);
    res.status(200).json(pokemon);
})

export default app;