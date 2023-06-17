import Axios from './api'

export const geDittoPokemon = (id: string) => Axios.get(`/pokemon/${id}`)
export const getAllPokemon = (query?: string) => Axios.get(query ? `/pokemon/?${query}` : '/pokemon')