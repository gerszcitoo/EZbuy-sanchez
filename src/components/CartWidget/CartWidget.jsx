import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import * as iconList from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Badge from "@mui/material/Badge";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);

  return (
    <>
      <Badge badgeContent={getTotalItemsInCart()} color="error">
        <FontAwesomeIcon icon={faCartShopping} />
      </Badge>
    </>
  );
}

export default CartWidget;
