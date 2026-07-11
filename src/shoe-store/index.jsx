import { useState, useRef } from "react";
import ListShoe from "./list-shoe";
import Detail from "./detail";
import Cart from "./cart";
import data from "./data.json";

export default function ShoeStore() {
  // UI
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const detailRef = useRef(null);

  // Logic
  const [listShoe, setListShoe] = useState(data);
  const [selectedShoe, setSelectedShoe] = useState(data[0]);
  const [listCart, setListCart] = useState([]);

  // UI
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // Check if user has scrolled near the bottom (within 20px)
    if (scrollHeight - scrollTop - clientHeight < 20) {
      if (visibleCount < listShoe.length) {
        setVisibleCount((prev) => Math.min(prev + 3, listShoe.length));
      }
    }
  };

  //Logic btap
  /**
   * Ham hien thi chi tiet
   */
  const handleDetailShoe = (shoe) => {
    setSelectedShoe(shoe);
    // Cuộn xuống phần chi tiết sản phẩm (Phần này AI làm vì muốn UX tốt hơn)
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /**
   * Ham tim index san pham
   */
  const _findIndexPhone = (id) => {
    return listCart.findIndex((shoe) => shoe.id === id);
  };

  /**
   * Ham them san pham vao gio hang
   */
  const handleAddShoeToCart = (shoe) => {
    const shoeToCart = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      price: shoe.price,
      qtFirt: 1,
    };
    // console.log(shoeToCart);

    const cloneShoeCart = [...listCart];
    const index = _findIndexPhone(shoeToCart.id);
    // console.log(index);

    if (index !== -1) {
      cloneShoeCart[index].qtFirt += 1;
    } else {
      cloneShoeCart.push(shoeToCart);
    }
    // console.log(cloneShoeCart);

    setListCart(cloneShoeCart);
  };

  /**
   * ham xoa san pham o gio hang
   */
  const handleDeleteShoeToCart = (id) => {
    const index = _findIndexPhone(id);
    if (index !== -1) {
      const cloneShoeCart = [...listCart];
      cloneShoeCart.splice(index, 1);
      setListCart(cloneShoeCart);
    }
  };

  /**
   * Hàm cập nhật số lượng sản phẩm trong giỏ hàng
   */
  const hanldeUpdateQty = (id, status) => {
    const index = _findIndexPhone(id);
    if (index !== -1) {
      const cloneShoeCart = [...listCart];
      if (status) {
        cloneShoeCart[index].qtFirt += 1;
      } else {
        if (cloneShoeCart[index].qtFirt > 1) {
          cloneShoeCart[index].qtFirt -= 1;
        } else {
          cloneShoeCart.splice(index, 1);
        }
      }
      setListCart(cloneShoeCart);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50/35 font-sans">
      {/* Sidebar - Left Section */}
      <aside className="w-64 bg-white border-r border-sky-400 p-8 flex flex-col shrink-0 select-none">
        <div>
          {/* Brand/Logo placeholder if needed, or spacing */}
          <div className="h-10"></div>

          <nav className="flex flex-col gap-3 mt-10">
            {/* Home Link with Sky-Blue border box */}
            <div className="border border-sky-400 px-4 py-2.5 text-center text-sm font-medium text-gray-700 cursor-pointer rounded-sm hover:bg-sky-50/50 transition">
              Home
            </div>

            {/* View Cart Button */}
            <button
              onClick={() => setIsOpenCart(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-black hover:bg-neutral-800 text-white rounded-xl text-sm font-semibold shadow-sm transition active:scale-95 duration-150 cursor-pointer"
            >
              <span>🛒</span> View Cart
              {listCart.length > 0 && (
                <span className="bg-sky-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                  {listCart.reduce((acc, item) => acc + item.qtFirt, 0)}
                </span>
              )}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area - Right Section */}
      <main className="flex-1 p-6 md:p-10 flex flex-col max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 mt-4">
          <h1 className="text-4xl font-light tracking-wide text-gray-400 font-sans">
            Shoes shop
          </h1>
        </div>

        {/* Product Grid Container - Scroll to see more products */}
        <div
          onScroll={handleScroll}
          className="max-h-[460px] overflow-y-auto pr-2 mb-6 border border-gray-150 rounded-2xl bg-white shadow-inner p-4 scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-sky-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-sky-300 transition duration-300"
        >
          <ListShoe
            listShoe={listShoe.slice(0, visibleCount)}
            onDetail={handleDetailShoe}
            onAddToCart={handleAddShoeToCart}
          />

          {/* Scroll Indicator */}
          {visibleCount < listShoe.length ? (
            <div className="text-center text-xs text-sky-500 font-semibold py-4 animate-pulse flex items-center justify-center gap-1.5 mt-4">
              <span>👇</span> Cuộn xuống để xem thêm sản phẩm
            </div>
          ) : (
            <div className="text-center text-xs text-gray-400 font-medium py-4 flex items-center justify-center gap-1.5 mt-4">
              <span>✨</span> Đã hiển thị tất cả sản phẩm
            </div>
          )}
        </div>

        {/* Product Specifications Section */}
        <div ref={detailRef}>
          <Detail selectedShoe={selectedShoe} />
        </div>

        {/* Cart Modal overlay */}
        <Cart
          isOpen={isOpenCart}
          onClose={() => setIsOpenCart(false)}
          listCart={listCart}
          onDeleteCart={handleDeleteShoeToCart}
          onUpdateQty={hanldeUpdateQty}
        />
      </main>
    </div>
  );
}
