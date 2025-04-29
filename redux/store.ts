// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import chargingReducer from './slices/chargeStatusSlice';

export const store = configureStore({
  reducer: {
    charging: chargingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;