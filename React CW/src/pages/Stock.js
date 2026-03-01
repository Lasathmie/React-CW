import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";

const Stock = () => {
  const [stock, setStock] = useState([]);

  const fetchStock = async () => {
    const res = await API.get("/stock");
    setStock(res.data);
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return (
    <div>
      <h2>Stock</h2>
      <ul>
        {stock.map((s) => (
          <li key={s.id}>
            {s.itemName} - Qty: {s.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;