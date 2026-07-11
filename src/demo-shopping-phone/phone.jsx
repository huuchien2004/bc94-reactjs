export default function Phone(props) {
  const { phone, onDetail, addPhoneToCart } = props;

  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
      <a href="#">
        <img className="rounded-t-base" src={phone.hinhAnh} alt={phone.tenSP} />
      </a>
      <div className="p-6 text-center">
        <a href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {phone.tenSP}
          </h5>
        </a>
        <button
          onClick={() => onDetail(phone)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Xem chi tiết
        </button>
        <button
          onClick={() => addPhoneToCart(phone)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Them gio hang
        </button>
      </div>
    </div>
  );
}
