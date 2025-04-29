// src/features/charging/chargingSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMockData } from '../../api/mockApi';
import { ChargingState } from '../../types/battaryStatusType';
import { InitialState } from '../../types/initialStateType';

// Define types


const initialState: InitialState = {
  states: [],
  loading: false,
  error: null,
};

// Async Thunk
export const getChargingStates = createAsyncThunk(
  'charging/getStates',
  async () => {
    const data = await getMockData() as { chargingStates: ChargingState[] };
    return data.chargingStates; 
  }
);

// Slice
const chargingSlice = createSlice({
  name: 'charging',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChargingStates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChargingStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(getChargingStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load charging states';
      });
  },
});

export default chargingSlice.reducer;