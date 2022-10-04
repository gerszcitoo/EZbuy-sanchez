import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ItemDetail(props) {
  const [countState, setCountState] = useState(false);
  const toggleCountState = () => {
    setCountState((estado) => !estado);
  };
  // ---HANDLER---
  function HandleAdd(count) {
    alert(`${count} nuevos items en el carrito`);
    toggleCountState();
  }
  let info = props.data;
  // -----RETURN ITEMDETAILS-----
  return (
    <div className="item-detail">
      <img
        src={info.img}
        alt={info.brand + " " + info.model + " " + info.ItemDetailyear}
      />
      <h1>
        {info.brand} {info.model}
      </h1>
      <p>{info.year}</p>
      <p>$ {info.price}</p>
      {countState === false ? (
        <ItemCount initial={1} stock={info.stock} onAdd={HandleAdd} />
      ) : (
        <Link to="/cart">
          <Button>Finalizar Compra</Button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;
