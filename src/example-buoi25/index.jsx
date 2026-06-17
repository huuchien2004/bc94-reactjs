import { dataGlasses } from "./data";
import { useState } from "react";

export default function ExampleBuoi25() {
  const [glasses, setGlasses] = useState(dataGlasses[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col"
      style={{ backgroundImage: "url('/images/glassesImage/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-black/60 py-6 text-center shadow-md">
          <h1 className="text-white text-xl md:text-2xl font-semibold tracking-widest uppercase">
            TRY GLASSES APP ONLINE
          </h1>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-12 w-full max-w-4xl">
            <div className="relative w-[280px] h-[350px] bg-white rounded-md overflow-hidden shadow-2xl transition-transform hover:scale-105">
              <img
                src="/images/glassesImage/model.jpg"
                alt="Model with glasses"
                className="w-full h-full object-cover"
              />
              <img
                src={glasses.url}
                alt="Glasses overlay"
                className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[55%] h-auto opacity-90 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-orange-400/80 p-3 text-left min-h-[95px] flex flex-col justify-center">
                <h3 className="text-blue-800 font-bold text-base md:text-lg">
                  {glasses.name}
                </h3>
                <p className="text-white text-xs mt-1 font-medium leading-relaxed">
                  {glasses.desc}
                </p>
              </div>
            </div>
            <div className="relative w-[280px] h-[350px] bg-white rounded-md overflow-hidden shadow-2xl transition-transform hover:scale-105">
              <img
                src="/images/glassesImage/model.jpg"
                alt="Model face"
                className="w-full h-full object-cover"
              />
            </div>z
          </div>
          <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-2xl">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {dataGlasses.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 p-2 rounded cursor-pointer hover:border-blue-500 hover:shadow-md transition-all duration-200 flex items-center justify-center bg-white aspect-[2/1]"
                  onClick={() => setGlasses(item)}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
