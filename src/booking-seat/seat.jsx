import { useSelector, useDispatch } from "react-redux";
import { onSelectSeat } from "./slice";

export default function Seat(props) {
  const { seat, isHeader } = props;
  const dispatch = useDispatch();

  const listCart = useSelector((state) => state.bookingSeatReducer.listCart) || [];
  const isSelected = listCart.some((item) => item.soGhe === seat.soGhe);

  const handleSelected = () => {
    dispatch(
      onSelectSeat({
        seat: seat,
      }),
    );
  };

  if (isHeader) {
    return (
      <div className="w-8 h-8 flex items-center justify-center font-black text-slate-500 select-none text-xs">
        {seat.soGhe}
      </div>
    );
  }

  const { soGhe, daDat } = seat;

  if (daDat) {
    return (
      <button
        disabled
        className="w-8 h-8 rounded-lg bg-rose-600/25 border border-rose-500/40 text-rose-500/70 cursor-not-allowed flex items-center justify-center font-bold text-[10px] transition-colors"
        title={`Ghế ${soGhe} đã được mua`}
      >
        X
      </button>
    );
  }

  return (
    <button
      onClick={handleSelected}
      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] border transition-all duration-200 cursor-pointer select-none active:scale-95 ${
        isSelected
          ? "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_10px_rgba(16,185,129,0.7)] scale-105"
          : "bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-750 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_6px_rgba(34,211,238,0.4)]"
      }`}
      title={`Ghế ${soGhe} - ${seat.gia.toLocaleString()}đ`}
    >
      {seat.soGhe}
    </button>
  );
}
