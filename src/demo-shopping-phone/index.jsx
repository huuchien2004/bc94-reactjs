import Listphone from "./list-phone";
import Detail from "./detail";
import data from "./data.json";
import { useState } from "react";
import Cart from "./cart";

export default function Index() {
  const [listPhone, setListPhone] = useState(data);
  const [selectedPhone, setSelectedPhone] = useState(data[0]);
  const [listCart, setListCart] = useState([]);

  /**
   * Xem chi tiet san pham
   */
  const handleDetail = (phone) => {
    setSelectedPhone(phone);
  };

  /**
   * Ham tim index san pham
   */
  const _findIndexListCart = (maSP) => {
    return listCart.findIndex((phone) => phone.maSP === maSP);
  };

  /**
   * Them san pham vao gio hang
   */
  const handleAddPhoneToCart = (phone) => {
    // console.log(phone);
    const phoneToCart = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      giaBan: phone.giaBan,
      soLuong: 1,
    };
    // console.log(phoneToCart);
    const index = _findIndexListCart(phone.maSP);
    const cloneListCart = [...listCart];
    if (index !== -1) {
      cloneListCart[index].soLuong += 1;
    } else {
      cloneListCart.push(phoneToCart);
    }
    setListCart(cloneListCart);
  };

  /**
   * Xoa san pham trong gio hang
   */
  const handleDeletePhoneToCart = (maSP) => {
    const index = _findIndexListCart(maSP);
    if (index !== -1) {
      const cloneListCart = [...listCart];
      cloneListCart.splice(index, 1);
      setListCart(cloneListCart);
    }
  };

  /**
   * Ham tang so luong trong gio hang
   */
  const handleTangSL = (maSP) => {
    const index = _findIndexListCart(maSP);
    if (index !== -1) {
      const cloneListCart = [...listCart];
      cloneListCart[index].soLuong += 1;
      setListCart(cloneListCart);
    }
  };
  /**
   * Ham giam so luong trong gio hang
   */
  const handleGiamSL = (maSP) => {
    const index = _findIndexListCart(maSP);
    if (index !== -1) {
      const cloneListCart = [...listCart];
      if (cloneListCart[index].soLuong > 1) {
        cloneListCart[index].soLuong -= 1;
      } else {
        cloneListCart.splice(index, 1);
      }
      setListCart(cloneListCart);
    }
  };

  return (
    <div>
      <Cart
        listCart={listCart}
        onDeletePhoneToCart={handleDeletePhoneToCart}
        onTangSL={handleTangSL}
        onGiamSL={handleGiamSL}
      />
      <Listphone
        listPhone={listPhone}
        onDetail={handleDetail}
        addPhoneToCart={handleAddPhoneToCart}
      />
      <Detail selectedPhone={selectedPhone} />
    </div>
  );
}
