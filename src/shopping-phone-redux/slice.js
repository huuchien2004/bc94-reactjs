import data from "./data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPhone: data,
  selectedPhone: data[0],
  listCard: [],
};

const shoppingPhoneSlice = createSlice({
  name: "shoppingPhoneSlice",
  initialState,
  reducers: {
    onDetail: (state, action) => {
      //Lay payload tu action
      const { payload } = action;
      //cap nhat lai state
      state.selectedPhone = payload;
    },
  },
});

export const { onDetail } = shoppingPhoneSlice.actions;
export default shoppingPhoneSlice.reducer;
