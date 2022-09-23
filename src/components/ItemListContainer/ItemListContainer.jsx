import "./ItemListContainer.css"
import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import getItems from "../../services/mockAPI";
import ItemList from "./ItemList/ItemList";

function ItemListContainer(props) {

  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((vehicleData) => {
      setData(vehicleData);
     });
  }, [])
  // -----BODY RETURN-----
    return (
      <>
        {/* ---HEADER--- */}
        <div className="header">
          <h1>{props.greeting}</h1>
        </div>
        <hr />
        {/* ---CARDS--- */}
        <div className="content">
          <ItemList data={data}/>
          
        </div>
      </>
    );
  }

export default ItemListContainer;