import Seat from "./seat";
import { useSelector } from "react-redux";

export default function ListSeat() {
  const listSeat = useSelector((state) => state.bookingSeatReducer.listSeat);

  const renderRowFirst = (list) => {
    return list.map((seat) => {
      return (
        <span
          className="text-slate-500 font-black text-sm text-center select-none"
          key={seat.soGhe}
        >
          {seat.soGhe}
        </span>
      );
    });
  };

  const renderRowAToJ = (row) => {
    return (
      <div
        key={row.hang}
        className="grid gap-2 items-center justify-items-center w-full"
        style={{
          gridTemplateColumns: "30px repeat(12, minmax(0, 1fr)) 30px",
        }}
      >
        <span className="font-bold text-slate-400 text-center">{row.hang}</span>
        {row.danhSachGhe.map((seat) => {
          return <Seat key={seat.soGhe} seat={seat} />;
        })}
        <span className="font-bold text-slate-400 text-center">{row.hang}</span>
      </div>
    );
  };

  const renderListSeat = () => {
    return listSeat.map((row, index) => {
      if (row.hang === "") {
        // Day so thu tu
        return (
          <div
            key={index}
            className="grid gap-2 items-center justify-items-center w-full"
            style={{
              gridTemplateColumns: "30px repeat(12, minmax(0, 1fr)) 30px",
            }}
          >
            <div className="w-6"></div>
            {renderRowFirst(row.danhSachGhe)}
            <div className="w-6"></div>
          </div>
        );
      } else {
        // day A - J
        return renderRowAToJ(row);
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Screen container */}
      <div className="w-full flex flex-col items-center mb-10 mt-2 relative">
        {/* Glow Screen */}
        <div className="w-full max-w-[500px] h-[6px] bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee] mb-2"></div>
        <p className="text-[10px] font-bold tracking-widest text-cyan-400/80 uppercase">
          Màn hình / Screen
        </p>
        <div className="absolute top-[8px] w-full max-w-[450px] h-[50px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-md rounded-t-full pointer-events-none"></div>
      </div>

      {/* Grid container with horizontal scroll wrapper for small devices */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <div className="min-w-[640px] px-2 flex flex-col items-center gap-3">
          {renderListSeat()}
        </div>
      </div>

      {/* Seat Type Guide / Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 border-t border-slate-800/80 pt-6 w-full max-w-[550px] text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-slate-800/40 border border-slate-700/60"></div>
          <span>Ghế trống (Available)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500 border border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
          <span>Đang chọn (Selecting)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-rose-600/25 border border-rose-500/40 flex items-center justify-center">
            <span className="text-rose-500/70 text-[9px] font-bold">X</span>
          </div>
          <span>Đã bán (Reserved)</span>
        </div>
      </div>
    </div>
  );
}
