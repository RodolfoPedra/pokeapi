import { combineReducers } from 'redux';
import createAsyncFetchSlice from '../store/helpers/createAsyncFetchSlice';

const resultRandom = createAsyncFetchSlice({
  name: 'randomPokes',
  fetchConfig: (payload) => ({
    url: `https://pokeapi.co/api/v2/pokemon?offset=${payload}&limit=15`,
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }),
});

const randomPokes = resultRandom.asyncAction;

export const pokesRandom = (payload) => async (dispatch) => {
  try {
    dispatch(randomPokes(payload));
  } catch (error) {
    console.error(error);
  }
};

const reducer = combineReducers({
  randomPokes: resultRandom.reducer,
});

export default reducer;
