import { useState } from "react";
export default function ExampleCar() {
  const [url, setUrl] = useState("./images/red-car.jpg");

  const handleChangeUrl = (url) => {
    setUrl(url);
  };
  
  return (
    <div>
      <h1>ExampleCar</h1>
      <div className="grid grid-cols-2">
        <div>
          <img src={url} />
        </div>
        <div>
          <button
            className="text-white bg-danger box-border px-4 py-2.5"
            onClick={() => handleChangeUrl("./images/red-car.jpg")}
          >
            Red
          </button>
          <button
            className="text-white bg-dark box-border px-4 py-2.5"
            onClick={() => handleChangeUrl("./images/black-car.jpg")}
          >
            Black
          </button>
          <button
            className="text-black bg-neutral-secondary-medium box-border px-4 py-2.5"
            onClick={() => handleChangeUrl("./images/silver-car.jpg")}
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
}
