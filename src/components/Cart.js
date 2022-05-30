import Items from "./Items";
import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";

const ALLITEMS = [
  {
    id: nanoid(),
    name: "Banana",
    pricePerItem: 0.5,
    amount: 0,
  },

  {
    id: nanoid(),
    name: "Apples",
    pricePerItem: 0.6,
    amount: 0,
  },

  {
    id: nanoid(),
    name: "Avocado",
    pricePerItem: 1.9,
    amount: 0,
  },
];
export default function Cart() {
  const [items, setItems] = useState(ALLITEMS);
  const totalPrice = items.reduce(
    (sum, item) =>
      Math.round((sum + item.pricePerItem * item.amount) * 100) / 100,
    0 //sum -> Akkumulator, sammelt Preis Summen, 0 ist Startwert, rechnet jeden Preis einmal auf den Akkumulator drauf
  );

  function deleteItem(id) {
    console.log(id);
    const updatedItems = items.filter((item) => !(item.id === id));
    setItems(updatedItems);
  }
  function addItem(itemName, itemPrice) {
    const newItemObject = {
      id: nanoid(),
      name: itemName,
      pricePerItem: itemPrice,
      price: 0,
      amount: 0,
    };
    setItems([...items, newItemObject]);
  }
  function updateItems(id, amount) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: amount,
        };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }

  return (
    <div>
      <p>Gesamtsumme: {totalPrice}€</p>
      <ul>
        {items.map((item) => (
          <Items
            itemData={item}
            totalPrice={totalPrice}
            onDelete={deleteItem}
            onUpdate={updateItems}
          />
        ))}
      </ul>
      <Form onSubmit={addItem} />
    </div>
  );
}
