import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";

function ItemDetail(props) {
  const [countState, setCountState] = useState(false);
  const toggleCountState = () => {
    setCountState((estado) => !estado);
  };
  // ---CONTEXT---
  const { addItem } = useContext(cartContext);
  // ---HANDLER---
  function HandleAdd(count) {
    addItem(props, count);
    toggleCountState();
  }
  let info = props.data;
  // -----RETURN ITEMDETAILS-----
  return (
    <div className="item-detail">
      {info.stock === 0 && <span>SIN STOCK</span>}
      <img
        src={info.img}
        alt={info.brand + " " + info.model + " " + info.ItemDetailyear}
      />
      <h1>
        {info.brand} {info.model}
      </h1>
      <p>{info.year}</p>
      <p>$ {info.price}</p>
      {!countState ? (
        <ItemCount initial={1} stock={info.stock} onAdd={HandleAdd} />
      ) : (
        <Link to="/cart">
          <Button>Ver Carrito</Button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;
