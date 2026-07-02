import Shoe from "./shoe";

export default function ListShoe(props) {
  const { listShoe, onDetail, onAddToCart } = props;

  const renderListShoe = () => {
    return listShoe.map((shoe) => (
      <Shoe
        key={shoe.id}
        shoe={shoe}
        onDetail={onDetail}
        onAddToCart={onAddToCart}
      />
    ));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {renderListShoe()}
    </div>
  );
}
