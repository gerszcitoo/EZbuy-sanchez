import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import "./CheckoutForm.css";

function CheckoutForm() {
  const context = useContext(cartContext);
  const { cart, getTotalItemPrice } = context;

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formValidation, setFormValidation] = useState(false);

  function inputChangeHandler(e) {
    let inputName = e.target.name;
    let value = e.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }
  useEffect(() => {
    if (
      dataForm.name.length !== 0 &&
      dataForm.phone.lenght !== 0 &&
      dataForm.email.length !== 0
    ) {
      setFormValidation(true);
    } else {
      setFormValidation(false);
    }
  }, [dataForm]);

  function handleCheckout(e) {
    e.preventDefault();
    if ((formValidation = true)) {
      const orderData = {
        buyer: dataForm,
        items: cart,
        date: new Date(),
        total: getTotalItemPrice(),
      };
      createBuyOrder(orderData).then((orderId) => {
        navigate(`/checkout/${orderId}`);
      });
    }
  }
  return (
    <div>
      <form className="form" onSubmit={handleCheckout}>
        <div className="fields-container">
          <div className="form-item">
            <input
              value={dataForm.name}
              onChange={inputChangeHandler}
              name="name"
              type="text"
              placeholder="Nombre"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-item">
            <input
              value={dataForm.phone}
              onChange={inputChangeHandler}
              name="phone"
              type="number"
              placeholder="Teléfono"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-item">
            <input
              value={dataForm.email}
              onChange={inputChangeHandler}
              name="email"
              type="text"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
        </div>
        {formValidation === true ? (
          <Button
            onClick={handleCheckout}
            className="action-cart"
            variant="contained"
          >
            Finalizar Compra
          </Button>
        ) : (
          <p className="data-petition">Complete los campos</p>
        )}
      </form>
    </div>
  );
}

export default CheckoutForm;
