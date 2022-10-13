import "./Cart.css";
import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import CardCart from "./CardCart/CardCart";

function Cart() {
  const context = useContext(cartContext);
  const { getTotalItemsInCart, emptyCart, getItemPrice } = context;

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
      <Button onClick={emptyCart} className="borrar-cart">
        Borrar carrito
      </Button>
      <div className="cart-body">
        <CardCart />
      </div>
      <div>Total: US${getItemPrice()}</div>
      <Link to="/" className="borrar-cart">
        <Button onClick={emptyCart}>Finalizar Compra</Button>
        {/* AÑADIR PANTALLA DE GRACIAS */}
      </Link>
    </>
  );
}

export default Cart;
