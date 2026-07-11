import { configureStore } from "@reduxjs/toolkit";
import shoppingPhoneReducer from "./../shopping-phone-redux/slice";
import bookingSeatReducer from "../booking-seat/slice";

const store = configureStore({
  reducer: {
    //child reducer
    shoppingPhoneReducer,
    bookingSeatReducer,
  },
});

export default store;
