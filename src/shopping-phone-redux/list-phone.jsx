import Phone from "./phone";
import { useSelector } from "react-redux";

export default function ListPhone(props) {
  const listPhone = useSelector(
    (state) => state.shoppingPhoneReducer.listPhone,
  );

  const renderListPhone = () => {
    const { onAddCardPhone } = props;
    return listPhone.map((phone) => (
      <Phone
        key={phone.maSP}
        phone={phone}
        // onDetailPhone={onDetailPhone}
        onAddCardPhone={onAddCardPhone}
      />
    ));
  };

  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
