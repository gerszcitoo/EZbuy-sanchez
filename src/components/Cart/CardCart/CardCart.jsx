import React, { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
import "./CardCart.css";
import Badge from "@mui/material/Badge";

function CardCart() {
  const context = useContext(cartContext);
  const { cart, deleteItem } = context;

  return (
    <>
      {cart.map((item) => (
        <Badge
          key={item.data.id}
          badgeContent={"x"}
          color="error"
          onClick={() => deleteItem(item.data.id)}
          className="badge"
        >
          <div className="cart-card">
            <img
              src={item.data.img}
              alt={
                item.data.brand + " " + item.data.model + " " + item.data.year
              }
            />
            <div>
              <h3>
                {item.data.brand} {item.data.model}
              </h3>
              <sub>(Año {item.data.year})</sub>
            </div>
            <p>US${item.data.price}</p>
            <p>Cantidad: {item.count}</p>
          </div>
        </Badge>
      ))}
    </>
  );
}

export default CardCart;
