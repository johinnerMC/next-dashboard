import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    // throw new Error('No se encontro')  

    return data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(100);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de pokemos <small>estaticos</small></span>
            <PokemonGrid pokemons={pokemons}/>
        </div>
    )
}