import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/root';

export const store = configureStore({
  reducer: {
    [counterSlice.reducerPath]: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
