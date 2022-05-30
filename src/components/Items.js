export default function Items({ itemData, onDelete, totalPrice, onUpdate }) {
  return (
    <div style={container}>
      <h2>{itemData.name}</h2>
      <h3>{itemData.pricePerItem}€</h3>
      <button
        onClick={() => {
          if (totalPrice + itemData.pricePerItem < 30) {
            itemData.amount = itemData.amount + 1;
            onUpdate(itemData.id, itemData.amount);
          } else {
            alert("money empty");
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (itemData.amount > 0) {
            itemData.amount = itemData.amount - 1;
            onUpdate(itemData.id, itemData.amount, itemData.price);
          }
        }}
      >
        -
      </button>
      <button style={deleteBtn} onClick={() => onDelete(itemData.id)}>
        X
      </button>
      <h3>Amount:{itemData.amount}</h3>
      <h3>
        Total:{Math.round(itemData.amount * itemData.pricePerItem * 100) / 100}
      </h3>
    </div>
  );
}

const container = {
  border: "3px solid black",
  margin: "2em auto",
  width: "200px",
  position: "relative",
};

const deleteBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
};
