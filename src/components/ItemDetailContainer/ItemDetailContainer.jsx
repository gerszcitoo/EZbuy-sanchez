import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});
  // use params for URL
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((vehicleData) => {
      setData(vehicleData);
    });
  }, [id]);
  // -----BODY RETURN-----
  return (
    <div className="item-detail-container">
      <h1>{data.title}</h1>
      <ItemDetail data={data} />
    </div>
  );
}

export default ItemDetailContainer;
