import { createSlice } from '@reduxjs/toolkit';

const createSelectSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      filterValue: '',
      ...config.initialState,
    },
    reducers: {
      changeFilter(state, action) {
        state.filterValue = action.payload;
      },
    },
  });

  return { ...slice };
};

export default createSelectSlice;
