import axios from 'axios';
import Pokemon from './pokemon.js';

const urlBase = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonByName(name) {

    let url = urlBase + name;

    try {
        let response = await axios.get(url);

        let pokemon = new Pokemon(
            response.data.id,
            response.data.name,
            response.data.species.name,
            response.data.types.map(typeInfo => typeInfo.type.name).join(" | "),
            response.data.sprites.front_default
        );

        console.log(pokemon);
        return response.data;

    } catch (error) {
        throw new Error("ops! ocorreu um ao buscar o Pokemon!", error);
    };
}

let responseApi = getPokemonByName("bulbasaur");
console.log(responseApi);