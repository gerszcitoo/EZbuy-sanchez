import "./CartWidget.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  // -----CART RETURN-----
    return (
      <FontAwesomeIcon icon={ faCartShopping } />
    );
  }

export default CartWidget;