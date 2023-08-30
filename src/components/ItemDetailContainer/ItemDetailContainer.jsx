import React, { useState, useEffect } from "react";
// import { getSingleItem } from "../../services/firestore";
import { getSingleItem } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((vehicleData) => setData(vehicleData))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h3>Error obteniendo los datos</h3>
            <p>{error}</p>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  } else if (error) {
    return (
      <>
        {error ? (
          <div>
            <h3>Error obteniendo los datos</h3>
            <p>{error}</p>
          </div>
        ) : (
          <div className="item-detail-container">
            <h1>{data.title}</h1>
            <ItemDetail data={data} />
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="item-detail-container">
        <h1>{data.title}</h1>
        <ItemDetail data={data} />
      </div>
    );
  }
}

export default ItemDetailContainer;
