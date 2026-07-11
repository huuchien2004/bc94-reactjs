import data from "./data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSeat: data,
  listCart: [],
};

const _findIndexSeat = (list, soGhe) => {
  return list.findIndex((seat) => seat.soGhe === soGhe);
};

const bookingSeatSlice = createSlice({
  name: "bookingSeatSlice",
  initialState,
  reducers: {
    onSelectSeat: (state, action) => {
      const { payload } = action;
      const { seat, selected } = payload;
      const listCartClone = [...state.listCart];
      const index = _findIndexSeat(listCartClone, seat.soGhe);
      if (index != -1) {
        //Remove
        listCartClone.splice(index, 1);
      }else{
        listCartClone.push(seat);
      }
      state.listCart = listCartClone;
    },
  },
});

export const { onSelectSeat } = bookingSeatSlice.actions;

export default bookingSeatSlice.reducer;
