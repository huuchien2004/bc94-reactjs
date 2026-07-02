import Phone from "./phone";

export default function Listphone(props) {
  const { listPhone, onDetail, addPhoneToCart } = props;

  const renderListPhone = () => {
    return listPhone.map((phone) => (
      <Phone
        key={phone.maSP}
        phone={phone}
        onDetail={onDetail}
        addPhoneToCart={addPhoneToCart}
        onDeletePhoneToCart
      />
    ));
  };
  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
