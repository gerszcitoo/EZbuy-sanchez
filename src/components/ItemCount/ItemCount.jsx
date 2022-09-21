import "./ItemCount.css";
import React, {useState} from "react";
import Button from '@mui/material/Button';


function ItemCount({stock, initial}) {
    // ----ADD AND TAKE FUNCTIONS----
    const [count, setCount] = useState(initial);
    function handleAdd(){
        if(count < stock){
            setCount(count+1);
        }
    }
    function handleTake(){
        if (count > initial){
            setCount(count-1);
        }
    }
    function onAdd(){
        console.log(count);
    }
    // -----ITEMCOUNT RETURN----
    return (
      <div>
        <div className="item-count-container">
            <Button variant="contained" size="small" onClick={handleTake}>-</Button>
            <h3>{count}</h3>
            <Button variant="contained" size="large" onClick={handleAdd}>+</Button>
        </div>
        <Button variant="outlined" onClick={onAdd}>Agregar al carrito</Button>
      </div>
    );
}

export default ItemCount;