import React, { useEffect, useState } from 'react'
import { getPokemonFromStorage } from '../utils/utils'
import { geDittoPokemon } from '../services/request'
import { PokemonCard } from '../components'
import { toast } from 'react-toastify'

const Bookmark = () => {
  const [bookmarkedPokemonList, setBookmarkedPokemonList] = useState<any[]>([])
  const fetchAllbookmarkedPokemon = async (pokemonList: any) => {
    const bookmarkedPokemonListData: any[] = []
    try {
      for (const pokemon of pokemonList) {
        const pokemonDetails: any = await geDittoPokemon(pokemon)
        if (pokemonDetails) {
          bookmarkedPokemonListData.push(pokemonDetails?.data)
        }
      }
    } catch (error) {
      toast.error('Error while fetching Pokemon')
    }
    setBookmarkedPokemonList(bookmarkedPokemonListData)
  }

  useEffect(() => {
    if (getPokemonFromStorage()) {
      fetchAllbookmarkedPokemon(getPokemonFromStorage())
    }
  }, [])

  return (
    <div className='flex gap-2 items-center justify-center'>
      {bookmarkedPokemonList?.length ? (
        bookmarkedPokemonList?.map((bookmarkPokemon) => {
          return (
            <PokemonCard
              key={bookmarkPokemon?.name}
              name={bookmarkPokemon?.name}
              id={bookmarkPokemon?.id}
              isBookmarkIconShown={false}
            />
          )
        })
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  )
}

export default Bookmark
