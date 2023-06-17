import { createAsyncThunk } from '@reduxjs/toolkit'
import { geDittoPokemon, getAllPokemon } from './request'

export const fetchDittoPokemon = createAsyncThunk(
  'pokemon/fetchDittoPokemon',
  async (nameOrId: string) => {
    const response = await geDittoPokemon(nameOrId)
    return response.data
  }
)
export const fetchAllPokemons = createAsyncThunk(
  'pokemons/fetchAllPokemons',
  async (query?: string) => {
    const response = await getAllPokemon(query)
    return response.data
  }
)
