import React from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function CategoryContainer() {
  return (
    <div className="category-container">
      <Link to="/categorias/Sedan" className="category-button">
        <Button variant="contained">Sedanes</Button>
      </Link>
      <Link to="/categorias/Coupe" className="category-button">
        <Button variant="contained">Coupés</Button>
      </Link>
      <Link to="/categorias/Compacto" className="category-button">
        <Button variant="contained">Compactos</Button>
      </Link>
      <Link to="/categorias/Camioneta" className="category-button">
        <Button variant="contained">Camionetas</Button>
      </Link>
    </div>
  );
}

export default CategoryContainer;
