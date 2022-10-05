import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import * as iconList from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);
  // -----CART RETURN-----
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="cart-items">{getTotalItemsInCart()}</span>
    </>
  );
}

export default CartWidget;
