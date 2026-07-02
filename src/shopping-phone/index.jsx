import ListPhone from "./list-phone";
import Detail from "./detail";
import data from "./data.json";
import { useState } from "react";
import Card from "./card";
import Cart from "./card";

export default function ShoppingPhone() {
  const [listPhone, setListPhone] = useState(data);
  const [selectedPhone, setSelectedPhone] = useState(data[0]);
  const [listCard, setListCard] = useState([]);

  /**
   * Hàm nhận dữ liệu từ component Phone
   */
  const handleDetailPhone = (phone) => {
    setSelectedPhone(phone);
  };

  const _finIndexPhone = (maSP) => {
    return listCard.findIndex((phone) => phone.maSP === maSP);
  };

  /**
   * Ham tang giam so luong
   */
  const handleUpdateQty = (maSP, status) => {
    const index = _finIndexPhone(maSP);
    if (index !== -1) {
      let cloneListCart = [...listCard];

      if (status) {
        cloneListCart[index].soLuong += 1;
      } else {
        if (cloneListCart[index].soLuong > 1) {
          cloneListCart[index].soLuong -= 1;
        } else {
          cloneListCart.splice(index, 1);
        }
      }
      setListCard(cloneListCart);
    }
  };

  /**
   * Hàm nhận dữ liệu thêm giỏ hàng từ phone
   */
  const handleAddCardPhone = (phone) => {
    // console.log(phone);
    const phoneToCard = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      giaBan: phone.giaBan,
      hinhAnh: phone.hinhAnh,
      soLuong: 1,
    };
    //Them phoneToCard => listCard
    /**
     * 1. Clone listCart thanh ban sao
     */
    // console.log(phoneToCard);
    let cloneListCart = [...listCard];
    const index = _finIndexPhone(phoneToCard.maSP);
    if (index !== -1) {
      //update
      cloneListCart[index].soLuong += 1;
      // console.log(cloneListCart);
    } else {
      //add
      cloneListCart.push(phoneToCard);
    }
    setListCard(cloneListCart);
  };

  /**
   * Xoa cart
   * 0.Tim index => goi lai _finIndexPhone
   * 1.Clone listCart thanh ban sao cloneListCart
   * 2.cloneListCart splice(index, 1)
   * 3.Cap nhat lai setListCart
   */
  const handleDeleteToCart = (maSP) => {
    // console.log(maSP);
    const index = _finIndexPhone(maSP);
    if (index !== -1) {
      const cloneListCart = [...listCard];
      cloneListCart.splice(index, 1);
      setListCard(cloneListCart);
    }
  };

  return (
    <div>
      <h1>* ShoppingPhone</h1>
      <Cart
        listCart={listCard}
        onDeleteToCart={handleDeleteToCart}
        onUpdateQty={handleUpdateQty}
      />
      <ListPhone
        listPhone={listPhone}
        onDetailPhone={handleDetailPhone}
        onAddCardPhone={handleAddCardPhone}
      />
      <Detail selectedPhone={selectedPhone} />
    </div>
  );
}
