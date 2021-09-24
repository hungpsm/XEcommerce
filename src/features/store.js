import { configureStore } from "@reduxjs/toolkit";
import QtyCardSlice from "features/Navigator/QtyCardSlice";

export const store = configureStore({
  reducer: {
    qtyCard: QtyCardSlice,
  },
});
