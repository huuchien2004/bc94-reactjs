import ListPhone from "./list-phone";
import Detail from "./detail";
import { useState } from "react";
import Card from "./card";
import Cart from "./card";

export default function ShoppingPhoneRedux() {
  return (
    <div>
      <h1>* ShoppingPhone</h1>
      <Cart />
      <ListPhone />
      <Detail />
    </div>
  );
}
