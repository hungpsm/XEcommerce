import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

const QtyCardSlice = createSlice({
  name: "qtyCard",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    applyNewState: (state, { payload }) => {
      state.value = payload.value;
    },
  },
});

export const { increment, decrement, applyNewState } = QtyCardSlice.actions;
export default QtyCardSlice.reducer;
