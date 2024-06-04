import { useState, useEffect } from "react";
import "./index.css";

const menu = [
  { id: 1, name: "Pad Thai", price: 10 },
  { id: 2, name: "Green Curry", price: 12 },
  { id: 3, name: "Tom Yum", price: 8 },
  { id: 4, name: "Massaman Curry", price: 11 },
  { id: 5, name: "Papaya Salad", price: 9 },
];

function App() {
  const [basket, setBasket] = useState(() => {
    // Retrieve basket from localStorage if it exists, otherwise return an empty array
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    // Save basket to localStorage whenever it changes
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item) => {
    const existingItem = basket.find((basketItem) => basketItem.id === item.id);
    if (existingItem) {
      setBasket(
        basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, qty: basketItem.qty + 1 }
            : basketItem
        )
      );
    } else {
      setBasket([...basket, { ...item, qty: 1 }]);
    }
  };

  const removeFromBasket = (item) => {
    setBasket(basket.filter((basketItem) => basketItem.id !== item.id));
  };

  const addQty = (id) => {
    setBasket(
      basket.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const removeQty = (id) => {
    setBasket(
      basket.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  return (
    <main>
      <h1>useState Practice</h1>
      <div className="container">
        <h2>Menu</h2>
        {menu.map((item) => (
          <div key={item.id} className="menuItem">
            <p>{item.name}</p>
            <span>${item.price}</span>
            <button onClick={() => addToBasket(item)}>Add</button>
          </div>
        ))}
        <h2>Basket</h2>
        <div className="basket">
          {basket.length > 0 ? (
            basket.map((item) => (
              <div key={item.id} className="basket-item">
                <button onClick={() => removeFromBasket(item)}>X</button>
                <p>
                  {item.name} x {item.qty}
                </p>
                <button onClick={() => addQty(item.id)}>+</button>
                <span>${item.price * item.qty}</span>
                <button onClick={() => removeQty(item.id)}>-</button>
              </div>
            ))
          ) : (
            <p>Your basket is empty</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
