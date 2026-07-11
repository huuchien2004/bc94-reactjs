import { useSelector } from "react-redux";

export default function Detail(props) {
  //Lay selectedPhone tu shoppingPhoneReducer
  const selectedPhone = useSelector(
    (state) => state.shoppingPhoneReducer.selectedPhone,
  );
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={selectedPhone && selectedPhone.hinhAnh} alt="phone" />
      </div>
      <div>
        <h2>Thông số kỹ thuật</h2>

        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <tbody>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Màn hình
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.manHinh}
                </td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Hệ điều hành
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.heDieuHanh}
                </td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Camera trước
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.cameraTruoc}
                </td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Camera sau
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.cameraSau}
                </td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Ram
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.ram}
                </td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Rom
                </th>
                <td className="px-6 py-4">
                  {selectedPhone && selectedPhone.rom}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
