import { configureStore } from "@reduxjs/toolkit";
import shoppingPhoneReducer from "./../shopping-phone-redux/slice";

const store = configureStore({
  reducer: {
    //child reducer
    shoppingPhoneReducer, 
  },
});

export default store;
