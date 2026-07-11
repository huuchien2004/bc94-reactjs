export default function Handle() {
  const handleDemoClick = () => {
    console.log("handleDemoClick");
  };

  const handleClickParams = (fullname) => {
    console.log(`Hello ${fullname}`);
  };

  return (
    <div>
      <h1>Handle</h1>
      <button onClick={handleDemoClick}>Demo click</button> <br />
      <button onClick={() => handleClickParams("Chien")}>
        Demo click params
      </button>
    </div>
  );
}
