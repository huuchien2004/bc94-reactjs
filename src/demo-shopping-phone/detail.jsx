export default function Detail(props) {
  const { selectedPhone } = props;

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={selectedPhone.hinhAnh} alt={selectedPhone.tenSP} />
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
                <td className="px-6 py-4">{selectedPhone.manHinh}</td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Hệ điều hành
                </th>
                <td className="px-6 py-4">{selectedPhone.heDieuHanh}</td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Camera trước
                </th>
                <td className="px-6 py-4">{selectedPhone.cameraTruoc}</td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Camera sau
                </th>
                <td className="px-6 py-4">{selectedPhone.cameraSau}</td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Ram
                </th>
                <td className="px-6 py-4">{selectedPhone.ram}</td>
              </tr>
              <tr className="bg-neutral-primary border-b border-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Rom
                </th>
                <td className="px-6 py-4">{selectedPhone.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
