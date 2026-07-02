export default function Detail(props) {
  const { selectedShoe } = props;

  return (
    <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
        <span>👟</span> Product Details & Specifications
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image Display */}
        <div className="flex justify-center bg-gray-50/50 rounded-2xl p-8 border border-gray-100/80 h-80 sm:h-96 select-none">
          <img
            src={selectedShoe.image}
            alt={selectedShoe.name}
            className="max-h-full max-w-full object-contain filter drop-shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Column: Specification Table */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">
              Adidas Performance
            </span>
            <h4 className="text-3xl font-extrabold text-gray-900 leading-tight">
              {selectedShoe.name}
            </h4>
            <div className="text-2xl font-black text-gray-800 mt-2">
              ${selectedShoe.price}
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {selectedShoe.description}
          </p>

          <div className="mt-4 overflow-hidden rounded-xl border border-gray-150 shadow-sm">
            <table className="w-full text-left text-gray-600">
              <tbody>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition">
                  <th
                    scope="row"
                    className="px-6 py-3 font-semibold text-gray-800 w-1/3"
                  >
                    Model Code
                  </th>
                  <td className="px-6 py-3 font-mono text-gray-600">
                    #{selectedShoe.id}
                  </td>
                </tr>
                <tr className="bg-gray-50/30 border-b border-gray-100 hover:bg-gray-50/50 transition">
                  <th
                    scope="row"
                    className="px-6 py-3 font-semibold text-gray-800"
                  >
                    Alias
                  </th>
                  <td className="px-6 py-3 font-mono text-xs">
                    {selectedShoe.alias}
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition">
                  <th
                    scope="row"
                    className="px-6 py-3 font-semibold text-gray-800"
                  >
                    Stock Quantity
                  </th>
                  <td className="px-6 py-3 font-medium text-emerald-600">
                    {selectedShoe.quantity} pairs available
                  </td>
                </tr>
                <tr className="bg-gray-50/30 hover:bg-gray-50/50 transition">
                  <th
                    scope="row"
                    className="px-6 py-3 font-semibold text-gray-800"
                  >
                    Sizes
                  </th>
                  <td className="px-6 py-3 flex gap-1.5 flex-wrap">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      38
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      39
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      40
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      41
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      42
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
