export default function Cart(props) {
  const { listCart, onDeletePhoneToCart, onTangSL, onGiamSL } = props;

  const renderQt = () => {
    return listCart.reduce((total, phone) => (total += phone.soLuong), 0);
  };
  const renderPrice = () => {
    return listCart.reduce(
      (total, phone) => (total += phone.soLuong * phone.giaBan),
      0,
    );
  };

  const renderListCart = () => {
    return listCart.map((phone) => {
      return (
        <tr className="border-b" key={phone.maSP}>
          <td className="px-4 py-3">{phone.maSP}</td>
          <td className="px-4 py-3">{phone.tenSP}</td>
          <td className="px-4 py-3">{phone.giaBan}</td>
          <td className="px-4 py-3">
            <button onClick={() => onGiamSL(phone.maSP)}>-</button>
            {phone.soLuong}
            <button onClick={() => onTangSL(phone.maSP)}>+</button>
          </td>
          <td className="px-4 py-3">{phone.giaBan * phone.soLuong}</td>
          <td className="px-4 py-3 text-center">
            <button
              onClick={() => onDeletePhoneToCart(phone.maSP)}
              className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        type="button"
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
      >
        Giỏ hàng ({renderQt()})
      </button>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="w-full max-w-5xl rounded-lg bg-white shadow-xl">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-2xl font-semibold">Giỏ hàng</h2>
            <button className="text-2xl text-gray-500 hover:text-black">
              ×
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3">Mã SP</th>
                    <th className="px-4 py-3">Tên sản phẩm</th>
                    <th className="px-4 py-3">Giá tiền</th>
                    <th className="px-4 py-3">Số lượng</th>
                    <th className="px-4 py-3">Thanh tien</th>
                    <th className="px-4 py-3 text-center">Setting</th>
                  </tr>
                </thead>
                <tbody>{renderListCart()}</tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end border-t pt-4">
              <div className="rounded-lg bg-slate-100 px-6 py-3 text-lg font-semibold">
                Tổng tiền: {renderPrice()} VNĐ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
