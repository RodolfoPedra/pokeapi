import { combineReducers } from 'redux';
import createSelectSlice from '../../store/helpers/createSelectSlice';

const namePokemon = createSelectSlice({
  name: 'namePokemon',
});

const reducer = combineReducers({
  namePokemon: namePokemon.reducer,
});

export const setNamePoke = namePokemon.actions.changeFilter;

export default reducer;
