/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core';
import { namesPokes } from '../../api/controllers/namesPokes.controller';
import { setNamePoke } from './reducer';
import { useDispatch } from 'react-redux';

type Props = {
  name: string;
  url: string;
};

const StyledTextField = withStyles({
  root: {
    background: '#fff',
    borderRadius: '10px',
    autoFocus: false,
  },
})(TextField);

export default function SearchBar() {
  const [names, setNames] = React.useState([]);

  const dispatch = useDispatch();

  function setFilterValue(event: any) {
    const value = event.target.innerText;

    if (typeof setNamePoke === 'function') {
      dispatch(setNamePoke(value));
    }
  }

  function keypress(event: any) {
    console.log(event);
  }

  React.useEffect(() => {
    (async () => {
      const result = await namesPokes(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000',
      );
      setNames(result);
    })();
  }, []);

  return (
    <div style={{ width: '75%' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={names.map((option: Props) => option.name)}
        onChange={setFilterValue}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder="Search Pokémon"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            onKeyPress={keypress}
          />
        )}
      />
    </div>
  );
}
