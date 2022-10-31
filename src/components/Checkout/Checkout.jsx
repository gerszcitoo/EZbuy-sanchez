import "./Checkout.css";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function Checkout() {
  const context = useContext(cartContext);
  const { orderId } = useParams();
  const { emptyCart } = context;

  useEffect(() => {
    emptyCart();
  });

  return (
    <div>
      <h2>¡Gracias por tu compra!</h2>
      <p>Por favor, conserva el ID de tu compra</p>
      <p>Tu ID es</p>
      <p className="order-id">{orderId}</p>
      <Link to="/">
        <Button variant="contained">Volver al Inicio</Button>
      </Link>
    </div>
  );
}

export default Checkout;
