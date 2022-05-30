import { useState } from "react";

export default function Form({ onSubmit }) {
  const [item, setItem] = useState({ name: "", pricePerItem: 0 });

  function setValue(event) {
    setItem({ ...item, [event.target.name]: event.target.value });
  }
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(item.name, parseFloat(item.pricePerItem));
      }}
    >
      <input
        name="name"
        type="text"
        value={item.name}
        onChange={(event) => setValue(event)}
        placeholder="new Item"
      />
      <input
        name="pricePerItem"
        type="text"
        value={item.pricePerItem}
        onChange={(event) => setValue(event)}
        placeholder="price"
      />
      <button>add Item</button>
    </form>
  );
}
