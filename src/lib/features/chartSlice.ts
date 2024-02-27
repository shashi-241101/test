// chartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartState {
  data: number[];
}

const initialState: ChartState = {
  data: [1, 1, 1, 1, 1, 1, 1],
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
    resetData: (state) => {
        state.data = initialState.data;
    },
  },
});

export const { setData, resetData } = chartSlice.actions;

export default chartSlice.reducer;