import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchDittoPokemon } from '../services/thunks'
import { PokemonCard } from '../components'

const Details = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { singlePokemon } = useAppSelector((state) => state?.pokemon)
  const fetchPokemons = (pokemonId: string) => {
    dispatch(fetchDittoPokemon(pokemonId))
  }
  useEffect(() => {
    if (id) {
      fetchPokemons(id)
    }
  }, [id])

  return (
    <div>
      <PokemonCard name={singlePokemon?.name} id={id} />
    </div>
  )
}

export default Details
