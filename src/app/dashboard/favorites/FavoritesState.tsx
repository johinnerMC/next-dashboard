'use client'
import { PokemonGrid } from "@/pokemons"
import { useAppDispatch, useAppSelector } from "@/store";
import { getInitialState } from "@/store/pokemons/pokemons";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesState = () => {
  const favoritePokemons = useAppSelector(store => Object.values(store.pokemons));
  const [pokemons, setPokemons] = useState(favoritePokemons)

  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStoragePokemons = localStorage.getItem('favorite-pokemons') ?? '{}';
    dispatch(getInitialState(localStoragePokemons))
  
  }, [dispatch, pokemons])
  

  return (
    <>
      {
        pokemons.length === 0
          ? (
            <div className="flex flex-col h-[50vh] items-center justify-center">
              <IoHeartOutline size={100} className="text-red-500" />
            </div>
          )
          : <PokemonGrid pokemons={pokemons} />
      }
    </>
  )
}
