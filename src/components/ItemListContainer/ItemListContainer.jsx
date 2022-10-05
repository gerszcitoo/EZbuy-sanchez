import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    if (cat === undefined) {
      getItems()
        .then((vehicleData) => {
          setData(vehicleData);
        })
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((vehicleData) => {
          setData(vehicleData);
        })
        .finally(() => setIsLoading(false));
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
      {isLoading && <Loader />}
      <div className="content">
        <ItemList data={data} />
      </div>
    </>
  );
}

export default ItemListContainer;
