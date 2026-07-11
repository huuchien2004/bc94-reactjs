import { useState } from "react";

export default function ListKey() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Banana" },
  ]);

  const renderListFruits = () => {
    const listLi = fruits.map((fruit) => {
      return (
        <li key={fruit.id}>
          id: {fruit.id} - name: {fruit.name}
        </li>
      );
    });
    return listLi;
  };

  const renderTbody = () => {
    return fruits.map((fruit) => {
      return (
        <tr>
          <td>{fruit.id}</td>
          <td>{fruit.name}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>ListKey</h1>
      <ul>
        {renderListFruits()}
        {/* {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              id: {fruit.id} - name: {fruit.name}
            </li>
          );
        })} */}
      </ul>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}
