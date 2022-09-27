import React from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail(props) {
  let info = props.data;
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
      <ItemCount initial={1} stock={info.stock} />
    </div>
  );
}

export default ItemDetail;
