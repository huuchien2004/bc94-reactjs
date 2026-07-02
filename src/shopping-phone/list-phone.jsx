import Phone from "./phone";

export default function ListPhone(props) {
  const renderListPhone = () => {
    const { listPhone, onDetailPhone, onAddCardPhone } = props;
    return listPhone.map((phone) => (
      <Phone
        key={phone.maSP}
        phone={phone}
        onDetailPhone={onDetailPhone}
        onAddCardPhone={onAddCardPhone}
      />
    ));
  };

  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
