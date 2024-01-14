import { PokemonCard, SimplePokemon } from "..";


interface Props {
    pokemons: SimplePokemon[];
}
export const PokemonGrid = ({pokemons} : Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map(pokemons => (
                        <PokemonCard key={pokemons.id} pokemon={pokemons}/>
                    ))
                }
            </div>
  )
}
