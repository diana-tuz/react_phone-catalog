/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourite: [] as string[],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    add(state, action) {
      const itemId = action.payload as string;

      if (state.favourite.some(item => item === itemId)) {
        return;
      }

      if (!state.favourite.includes(itemId)) {
        state.favourite.push(itemId);
      }
    },
    remove(state, action) {
      state.favourite = state.favourite.filter(
        (element) => element !== action.payload,
      );
    },

    clear(state) {
      state.favourite = [];
    },
  },
});

export const { add, remove, clear } = favouriteSlice.actions;
export default favouriteSlice.reducer;
