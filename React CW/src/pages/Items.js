import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";

const Items = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchItems = async () => {
    const res = await API.get("/items");
    setItems(res.data);
  };

  const addItem = async () => {
    await API.post("/items", { name, price });
    setName("");
    setPrice("");
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items</h2>

      <input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;