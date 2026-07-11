export default function Shoe(props) {
  const { shoe, onDetail, onAddToCart } = props;

  return (
    <div className="bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col h-full transition duration-300 hover:shadow-md">
      {/* Product Image */}
      <div className="flex items-center justify-center p-6 bg-white cursor-pointer h-64 select-none hover:opacity-90 transition">
        <img
          onClick={() => onDetail(shoe)}
          src={shoe.image}
          alt={shoe.name}
          className="max-h-full max-w-full object-contain transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h5
            onClick={() => onDetail(shoe)}
            className="text-lg font-medium text-gray-800 tracking-tight cursor-pointer hover:text-sky-500 transition line-clamp-1"
          >
            {shoe.name}
          </h5>
          <p className="mt-1 text-sm font-semibold text-gray-600">
            {shoe.price} $
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onAddToCart(shoe)}
            className="bg-black text-white px-4 py-2 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-neutral-800 transition active:scale-95 duration-150 select-none cursor-pointer"
          >
            Add to Carts
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>

          <button
            onClick={() => onDetail(shoe)}
            className="border border-gray-300 text-gray-700 px-3 py-2 text-xs font-semibold hover:bg-gray-50 transition active:scale-95 duration-150 select-none cursor-pointer"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
