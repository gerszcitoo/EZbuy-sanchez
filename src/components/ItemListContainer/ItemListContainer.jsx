import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((vehicleData) => {
        setData(vehicleData);
      });
    } else {
      getItemsByCategory(cat).then((vehicleData) => {
        setData(vehicleData);
      });
    }
  }, [cat]);
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
        <ItemList data={data} />
      </div>
    </>
  );
}

export default ItemListContainer;
