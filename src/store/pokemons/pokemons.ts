// rxslice 

import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// {
//     '1' : {id: 1, name: 'bulbasaur'}
// }
interface PokemonsState {
    [key: string]: SimplePokemon
}

// const getInitialState = (): PokemonsState => {
//     return JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')
// }

const initialState: PokemonsState = {
    '1' : {id: '1', name: 'bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getInitialState(state, action: PayloadAction<PokemonsState>){
        state = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
        const { id } = action.payload;

        if( state[id] !== undefined){
            delete state[id];
            return
        } 

        state[id] = action.payload;
    }
  }
});

export const { toggleFavorite, getInitialState } = pokemonsSlice.actions

export default pokemonsSlice.reducer