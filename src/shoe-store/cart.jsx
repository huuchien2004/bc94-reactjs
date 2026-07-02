import React, { useState } from "react";
//UI làm cho đẹp nếu lỗi đường dẫn ảnh thì hiện ảnh 👟
function CartImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className="w-[50px] h-[50px] rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center shadow-inner select-none mx-auto"
        title={alt}
      >
        <span className="text-xl filter grayscale opacity-75">👟</span>
      </div>
    );
  }

  return (
    <div className="w-[50px] h-[50px] rounded-lg border border-gray-200 bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden mx-auto">
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-contain transform hover:scale-110 transition duration-300"
      />
    </div>
  );
}
// End UI làm cho đẹp nếu lỗi đường dẫn ảnh thì hiện ảnh 👟

//Logic btap
export default function Cart({
  isOpen,
  onClose,
  listCart,
  onDeleteCart,
  onUpdateQty,
}) {
  if (!isOpen) return null;

  const handleClose = () => {
    if (onClose) onClose();
  };

  const renderPrice = () => {
    return listCart.reduce((total, shoe) => (total += shoe.qtFirt * shoe.price), 0);
  };

  const renderListCart = () => {
    return listCart.map((shoe) => {
      return (
        <tr key={shoe.id}>
          <td className="pb-3 font-semibold">
            <CartImage src={shoe.image} alt={shoe.name} />
          </td>
          <td className="pb-3 font-semibold text-center">{shoe.name}</td>
          <td className="pb-3 font-semibold text-center">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => onUpdateQty(shoe.id, false)}
                className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold active:scale-95 duration-100 cursor-pointer select-none"
              >
                -
              </button>
              <span className="w-8 text-center">{shoe.qtFirt}</span>
              <button
                onClick={() => onUpdateQty(shoe.id, true)}
                className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold active:scale-95 duration-100 cursor-pointer select-none"
              >
                +
              </button>
            </div>
          </td>
          <td className="pb-3 font-semibold text-center">{shoe.price}</td>
          <td className="pb-3 font-semibold text-center">
            {shoe.price * shoe.qtFirt}
          </td>
          <td className="pb-3 font-semibold text-center">
            <button
              onClick={() => onDeleteCart(shoe.id)}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 scale-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition duration-150 text-xl font-bold w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600 uppercase text-xs tracking-wider">
                  <th className="pb-3 font-semibold text-center">Image</th>
                  <th className="pb-3 font-semibold text-center">
                    Product Name
                  </th>
                  <th className="pb-3 font-semibold text-center">Quantity</th>
                  <th className="pb-3 font-semibold text-center">Price</th>
                  <th className="pb-3 font-semibold text-center">Total</th>
                  <th className="pb-3 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {renderListCart()}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-500 font-medium">Estimated Total:</span>
            <span className="text-2xl font-bold text-gray-900">${renderPrice()}</span>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition active:scale-95 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
