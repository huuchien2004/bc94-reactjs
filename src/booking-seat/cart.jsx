import { useSelector, useDispatch } from "react-redux";
import { onSelectSeat } from "./slice";

export default function Cart() {
  const listCart = useSelector((state) => state.bookingSeatReducer.listCart) || [];
  const totalPrice = listCart.reduce((sum, seat) => sum + seat.gia, 0);
  const dispatch = useDispatch();
  
  const renderListSeatSelected = () => {
    return listCart.map((seat) => {
      return (
        <li
          key={seat.soGhe}
          className="flex items-center justify-between bg-slate-900/60 hover:bg-slate-800/40 border border-slate-800/80 rounded-xl p-3.5 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs select-none shadow-[0_0_8px_rgba(6,182,212,0.15)]">
              {seat.soGhe}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                Ghế đơn
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {seat.gia.toLocaleString()} đ
              </span>
            </div>
          </div>
          <button
            onClick={() => dispatch(onSelectSeat({ seat }))}
            className="text-xs text-rose-500 hover:text-rose-450 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer active:scale-95"
            title={`Hủy chọn ghế ${seat.soGhe}`}
          >
            Hủy
          </button>
        </li>
      );
    });
  };

  return (
    <div className="flex flex-col h-full min-h-[350px]">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <span>Danh sách ghế bạn chọn</span>
          <span className="bg-cyan-500/25 text-cyan-400 text-xs px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {listCart.length}
          </span>
        </h2>
      </div>

      {/* Selected Seats List */}
      <div className="flex-grow overflow-y-auto max-h-[350px] pr-1 mb-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        {listCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center text-slate-500">
            <svg
              className="w-12 h-12 stroke-current mb-3 text-slate-600"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <p className="text-sm font-semibold">Chưa chọn ghế nào</p>
            <p className="text-xs text-slate-600 mt-1">
              Vui lòng click chọn ghế trên sơ đồ
            </p>
          </div>
        ) : (
          <ul className="space-y-2.5">
            {renderListSeatSelected()}
          </ul>
        )}
      </div>

      {/* Bill Calculation */}
      <div className="border-t border-slate-800/85 pt-4 space-y-2 text-sm text-slate-405">
        <div className="flex justify-between items-end">
          <span className="font-semibold text-slate-350">Tổng tiền</span>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 shadow-sm drop-shadow-[0_2px_4px_rgba(245,158,11,0.2)]">
            {totalPrice.toLocaleString()} đ
          </span>
        </div>
      </div>

      {/* Actions */}
      <button
        disabled={listCart.length === 0}
        onClick={() => alert(`Đặt vé thành công! Tổng tiền: ${totalPrice.toLocaleString()} đ`)}
        className={`w-full mt-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg ${
          listCart.length === 0
            ? "bg-slate-800/60 text-slate-500 border border-slate-800/40 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/10 cursor-pointer active:scale-95"
        }`}
      >
        ĐẶT VÉ
      </button>
    </div>
  );
}
