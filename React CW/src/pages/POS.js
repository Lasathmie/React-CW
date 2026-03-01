import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";

const POS = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/items").then((res) => setItems(res.data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const checkout = async () => {
    await API.post("/orders", { items: cart });
    alert("Order Completed!");
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>POS</h2>

      <h3>Items</h3>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} - Rs.{item.price}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}

      <h3>Total: Rs.{total}</h3>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default POS;