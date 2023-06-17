import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchAllPokemons, fetchDittoPokemon } from '../../services/thunks'
import { toast } from 'react-toastify'

export interface CounterState {
  value: number
  singlePokemon: any,
  pokemonList: any,
  loading: any,
  error: any,
  limit: number,
  offset: number
}

const initialState: CounterState = {
  value: 0,
  singlePokemon: {},
  pokemonList: {},
  loading: { singlePokemons: false, allPokemon: false },
  error: { singlePokemons: '', allPokemon: '' },
  limit: 10,
  offset: 1,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    incrementPage: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.offset += 1 + state.offset
    },
    decrementPage: (state) => {
      state.offset -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDittoPokemon.pending, (state, action: PayloadAction<any>) => {
      state.loading.singlePokemons = true
      // toast.loading('Loading ',{});
    })
    builder.addCase(fetchDittoPokemon.fulfilled, (state, action) => {
      state.loading.singlePokemons = false
      state.singlePokemon = action.payload
      toast.success('Successfully added')
    })
    builder.addCase(fetchDittoPokemon.rejected, (state, action: PayloadAction<any>) => {
      state.loading.singlePokemons = false
      state.error.singlePokemons = action.payload
      toast.error('Error')
    })
    builder.addCase(fetchAllPokemons.pending, (state, action: PayloadAction<any>) => {
      state.loading.allPokemon = true
      // toast.loading('Loading ',{});
    })
    builder.addCase(fetchAllPokemons.fulfilled, (state, action) => {
      state.loading.allPokemon = false
      state.pokemonList = action.payload
      toast.success('Successfully added')
    })
    builder.addCase(fetchAllPokemons.rejected, (state, action: PayloadAction<any>) => {
      state.loading.allPokemon = false
      state.error.allPokemon = action.payload
      toast.error('Error')
    })
  },

})

// Action creators are generated for each case reducer function
export const { incrementPage, decrementPage, incrementByAmount } = pokemonSlice.actions

export default pokemonSlice.reducer