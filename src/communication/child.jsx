export default function ChildComponent(props) {
  console.log(props);

  return (
    <div>
      <h1>ChildComponent</h1>
      <p>Username: {props.username}</p>
      <button onClick={() =>{props.onHandleResetUsername("Chien")}} className="text-white bg-danger box-border px-4 py-2.5">
        Reset Username
      </button>
      <p>Age: {props.age}</p>
    </div>
  );
}
