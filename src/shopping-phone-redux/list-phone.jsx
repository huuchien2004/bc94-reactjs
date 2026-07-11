import Phone from "./phone";
import { useSelector } from "react-redux";

export default function ListPhone() {
  const listPhone = useSelector(
    (state) => state.shoppingPhoneReducer.listPhone,
  );

  const renderListPhone = () => {
   
    return listPhone.map((phone) => (
      <Phone
        key={phone.maSP}
        phone={phone}
      />
    ));
  };

  return <div className="grid grid-cols-3">{renderListPhone()}</div>;
}
