import { combineReducers } from 'redux';
import createAsyncFetchSlice from '../store/helpers/createAsyncFetchSlice';

const pokesUrl = createAsyncFetchSlice({
  name: 'initialPokes',
  fetchConfig: (payload) => ({
    url: `https://pokeapi.co/api/v2/pokemon?offset=${payload}&limit=6`,
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }),
});

const poke = createAsyncFetchSlice({
  name: 'uniquePoke',
  fetchConfig: (payload) => ({
    url: `https://pokeapi.co/api/v2/pokemon/${payload}`,
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }),
});

const initialPokes = pokesUrl.asyncAction;
const pokeFilter = poke.asyncAction;

export const listPokes = (payload) => async (dispatch) => {
  try {
    dispatch(initialPokes(payload));
  } catch (error) {
    console.error(error);
  }
};

export const uniquePoke = (payload) => async (dispatch) => {
  try {
    dispatch(pokeFilter(payload));
  } catch (error) {
    console.error(error);
  }
};

const reducer = combineReducers({
  pokesUrl: pokesUrl.reducer,
  pokeFilter: poke.reducer,
});

export default reducer;
