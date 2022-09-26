import React, {useState, useEffect} from "react";
import {getSingleItem} from "../../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  
    let [data, setData] = useState({ });
  
    useEffect(() => {
      getSingleItem().then((vehicleData) => {
        setData(vehicleData);
       });
    }, [])
    // -----BODY RETURN-----
      return (
        <div className="item-detail-container">
            <h1>{data.title}</h1>
            <ItemDetail data={data}/>
        </div>
      );

}



  

export default ItemDetailContainer