export default function RenderingElement() {
  const username = "Chien";
  const title = "Noi nay co anh";
  const description = "Lorem...";

  const renderSong = () => {
    return (
      <div>
        <h1>Tên bài hát: {title}</h1>
        <p>Lời bài hát: {description}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>RenderingElement</h1>
      <div>{username}</div>

      {renderSong()}
    </div>
  );
}
