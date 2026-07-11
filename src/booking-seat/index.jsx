import ListSeat from "./list-seat";
import Cart from "./cart";
import { useSelector } from "react-redux";

export default function BookingSeat() {
  const listCart = useSelector((state) => state.bookingSeatReducer.listCart) || [];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-8 font-sans antialiased relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-cyan-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        {/* Cinema Booking Header */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800/80 pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30">
              Cyber Cinema Booking
            </span>
            <h1 className="text-3xl md:text-4xl font-black mt-2 tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              ĐẶT VÉ XEM PHIM
            </h1>
            <p className="text-xs text-slate-405 mt-1 flex items-center gap-2 justify-center md:justify-start">
              <span>Phim:</span> 
              <span className="text-slate-200 font-bold">Avengers: Endgame (IMAX 3D)</span>
              <span className="text-slate-700">|</span>
              <span>Suất:</span>
              <span className="text-slate-200 font-bold">19:30 - Hôm nay</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4 justify-center">
            <div className="text-right hidden md:block">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Phòng chiếu</p>
              <p className="text-sm font-black text-slate-350">RẠP 03 (IMAX)</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-800 hidden md:block"></div>
            <div className="bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800 flex flex-col items-center min-w-[100px]">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Ghế đã chọn</span>
              <span className="text-lg font-black text-cyan-400">{listCart.length}</span>
            </div>
          </div>
        </div>

        {/* Interactive Layout Area */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Seating Grid Map */}
          <div className="xl:col-span-8 bg-slate-900/40 backdrop-blur-md border border-slate-850 rounded-3xl p-4 md:p-8 shadow-2xl">
            <ListSeat />
          </div>

          {/* Seat details / Booking Summary */}
          <div className="xl:col-span-4 bg-slate-900/40 backdrop-blur-md border border-slate-850 rounded-3xl p-6 shadow-2xl">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
