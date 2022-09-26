import React from "react";
import "./ItemDetail.css";

function ItemDetail(props) {
let info = props.data;
  return (
    <div className="item-detail">
        <img src={info.img} alt={info.brand + " " + info.model + " " + info.ItemDetailyear} />
        <h1>{info.brand} {info.model}</h1>
        <p>{info.year}</p>
        <p>$ {info.price}</p>
    </div>
  )
}

export default ItemDetail