import "./ItemCount.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function ItemCount({ stock, initial, onAdd }) {
  // ----ADD AND TAKE FUNCTIONS----
  const [count, setCount] = useState(initial);
  function handleAdd() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleTake() {
    if (count > initial) {
      setCount(count - 1);
    }
  }
  // -----ITEMCOUNT RETURN----
  return (
    <div className="add-to-cart-container">
      <div className="item-count-container">
        <Button variant="contained" size="small" onClick={handleTake}>
          -
        </Button>
        <h3>{count}</h3>
        <Button variant="contained" size="large" onClick={handleAdd}>
          +
        </Button>
      </div>
      <Button variant="outlined" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
