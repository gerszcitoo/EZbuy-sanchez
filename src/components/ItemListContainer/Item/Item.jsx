import React from "react";
import "./Item.css";
import Button from '@mui/material/Button';
import ItemCount from "../../ItemCount/ItemCount"

function Card(props){
    let {brand, model, year, img, category, price, stock} = props;
    // ---CARD RETURN---
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt={brand + " " + model + " " + year}></img>
            </div>
            <div className="card-detail">
                <h3>{brand}</h3>
                <h3>{model}</h3>
                <p>{year}</p>
                <p>{category}</p>
                <h4>US$ {price}</h4>
            </div>

            <Button variant="contained" className="card-btn">Ver más</Button>
            <ItemCount initial={1} stock={stock} />
            
        </div>
    );
}

export default Card;