import ChildComponent from "./child";
import { useState } from "react";

export default function Communication() {
  const [userName, setUsername] = useState("Chien");
  const [age, setAge] = useState(18);

  const handleChangeUsername = () => {
    setUsername("Nhu Y");
  };

  /**
   * Hàm này sẽ truyền vào componenet con để truyền dữ liệu
   */
  const onHandleResetUsername = (data) => {
    setUsername(data);
  };

  return (
    <div>
      <h1>Communication</h1>
      <p>Username: {userName}</p>
      <button
        onClick={handleChangeUsername}
        className="text-white bg-blue-700 box-border px-4 py-2.5"
      >
        Change Username
      </button>
      <p>Age: {age}</p>
      <hr />
      <ChildComponent
        username={userName}
        age={age}
        onHandleResetUsername={onHandleResetUsername}
      />
    </div>
  );
}
