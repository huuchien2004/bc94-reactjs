import Card from "./card";

export default function List() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
