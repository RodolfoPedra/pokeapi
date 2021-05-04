import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokes from '../api/pokemonInit';
import SearchBar from '../Components/SearchBar/reducer';
import randomPokes from '../api/randomPokemons';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({ pokes, SearchBar, randomPokes });
const store = configureStore({ reducer, devTools });

export default store;
