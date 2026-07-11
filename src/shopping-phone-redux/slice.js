import data from "./data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPhone: data,
  selectedPhone: data[0],
  listCart: [],
};

const _finIndexPhone = (listCarts, maSP) => {
  return listCarts.findIndex((phone) => phone.maSP === maSP);
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

    onAddToCarts: (state, action) => {
      // console.log(action);
      const { payload } = action;

      const phoneToCart = {
        maSP: payload.maSP,
        tenSP: payload.tenSP,
        giaBan: payload.giaBan,
        hinhAnh: payload.hinhAnh,
        soLuong: 1,
      };
      let cloneListCart = [...state.listCart];
      const index = _finIndexPhone(cloneListCart, phoneToCart.maSP);
      if (index !== -1) {
        //update
        cloneListCart[index].soLuong += 1;
        // console.log(cloneListCart);
      } else {
        //add
        cloneListCart.push(phoneToCart);
      }
      state.listCart = cloneListCart;
    },

    onDeleteCart: (state, action) => {
      const { payload } = action;
      const index = _finIndexPhone(state.listCart, payload);
      if (index !== -1) {
        const cloneListCart = [...state.listCart];
        cloneListCart.splice(index, 1);
        state.listCart = cloneListCart;
      }
    },

    onUpdateQty: (state, action) => {
      const { payload } = action;
      const {maSP, status} = payload;
      const index = _finIndexPhone(state.listCart, maSP);
    if (index !== -1) {
      let cloneListCart = [...state.listCart];

      if (status) {
        cloneListCart[index].soLuong += 1;
      } else {
        if (cloneListCart[index].soLuong > 1) {
          cloneListCart[index].soLuong -= 1;
        } else {
          cloneListCart.splice(index, 1);
        }
      }
      state.listCart = cloneListCart;
    }
    }
  },
});

export const { onDetail, onAddToCarts, onDeleteCart, onUpdateQty } = shoppingPhoneSlice.actions;
export default shoppingPhoneSlice.reducer;
