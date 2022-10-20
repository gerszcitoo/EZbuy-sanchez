import "./Cart.css";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import CardCart from "./CardCart/CardCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Cart() {
  const context = useContext(cartContext);
  const { getTotalItemsInCart, emptyCart, getTotalItemPrice } = context;

  let isCartEmpty = true;
  // if cart is not empty, shows cart
  if (getTotalItemsInCart() !== 0) {
    isCartEmpty = false;
  }
  // if car is empty, shows message
  if (isCartEmpty) {
    return (
      <div className="empty-cart-body">
        Tu carrito está vacío
        <Link to="/">
          <Button>Ir a la tienda</Button>
        </Link>
      </div>
    );
  }

  // ---CART RETURN---
  return (
    <>
      <Button onClick={emptyCart} className="action-cart">
        Borrar carrito
      </Button>
      <div className="cart-body">
        <CardCart />
      </div>
      <div>Total: US${getTotalItemPrice()}</div>
      <CheckoutForm />
    </>
  );
}

export default Cart;
