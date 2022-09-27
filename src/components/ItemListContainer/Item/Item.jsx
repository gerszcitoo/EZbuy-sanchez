import React from "react";
import "./Item.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Card(props) {
  let { brand, model, year, img, price, id } = props;
  const urlDetail = `/autos/${id}`;
  // ---CARD RETURN---
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={brand + " " + model + " " + year}></img>
      </div>
      <div className="card-detail">
        <h3>{brand}</h3>
        <h3>{model}</h3>
        <p>{year}</p>
        <h4>US$ {price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button variant="contained" className="card-btn">
          Ver más
        </Button>
      </Link>
    </div>
  );
}

export default Card;
