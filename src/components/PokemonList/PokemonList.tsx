/* eslint-disable no-constant-condition */
import React from 'react'
import { PokemonCard, Skelton } from '../../components'
// import PokemonImage from '../PokemonImage'
import { useAppSelector } from '../../redux/store'


const PokemonList: React.FC = () => {
  const { pokemonList, loading } = useAppSelector((state) => state.pokemon)
  if (loading?.allPokemon)
    return (
      <div>
        <Skelton />
      </div>
    )

  return (
    <section id='pokemon_list' className='flex gap-3 items-center flex-wrap mt-4 '>
      {Array.isArray(pokemonList?.results) && pokemonList?.results?.length ? (
        pokemonList?.results?.map((pokemon: any) => {
          return (
            <div key={pokemon?.name}>
              <PokemonCard
                key={pokemon?.name}
                name={pokemon?.name}
                id={pokemon?.url?.split('/')?.slice(-2)?.[0]}
              />
              {/* <PokemonImage pokemonName="pikachu"/> */}
            </div>
          )
        })
      ) : (
        <div>No Result Found</div>
      )}
    </section>
  )
}

export default PokemonList
