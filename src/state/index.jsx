import { useState } from "react";

export default function State() {
  /**
   * count hiện tại có giá trị bằng 0
   * setCount: là hàm dùng để cập nhật lại giá trị mới cho count
   */
  const [count, setCount] = useState(0);
  console.log("State Component");

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>State</h1>
      <p>Number: {count}</p>
      <button
        type="button"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}
