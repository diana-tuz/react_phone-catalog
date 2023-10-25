import { configureStore } from '@reduxjs/toolkit';
import favouriteSlice from './favouriteSlice';

const store = configureStore({
  reducer: {
    favourite: favouriteSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
