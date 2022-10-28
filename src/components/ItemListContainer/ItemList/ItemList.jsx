import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            brand={item.brand}
            model={item.model}
            year={item.year}
            img={item.img}
            price={item.price}
            category={item.category}
            stock={item.stock}
          ></Item>
        );
      })}
    </>
  );
}

export default ItemList;
