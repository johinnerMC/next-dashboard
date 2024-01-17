import { FavoritesState } from "./FavoritesState";

export const metadata = {
    title: 'Favoritos',
    description: 'ok'
}

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-3xl my-2">Listado de pokemos favoritos <small className="text-blue-500">Global State</small></span>
            
            <FavoritesState/>
        </div>
    )
}