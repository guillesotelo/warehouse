import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"

export const setPokemon = createAsyncThunk('SET_POKEMON')

const pokeReducer = createReducer({}, {
  [setPokemon.fulfilled]: (state, action) => action.payload,
});

export default pokeReducer;