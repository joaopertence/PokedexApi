import axios from 'axios';

const urlBase = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonByName(name) {

    let url = urlBase + name;

    try {
        let response = await axios.get(url);

        // Pesquisar sobre descontrução no javascript
        let pokemon = {
            id: response.data.id,
            name: response.data.name,
            specie: response.data.species.name,
            types: response.data.types.map(typeInfo => typeInfo.type.name).join(" | "),
            image: response.data.sprites.front_default
        }

        // console.log(pokemon);
        return pokemon;

    } catch (error) {
        throw new Error("ops! ocorreu um ao buscar o Pokemon!", error);
    };
}

export default { getPokemonByName };

// async function run() {
//     let responseApi = await getPokemonByName("bulbasaur");
//     console.log(responseApi);
// }

// run()