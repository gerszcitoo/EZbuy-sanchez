import React from "react";
import { NewtonsCradle } from "@uiball/loaders";
import { Ring } from "@uiball/loaders";

function Loader() {
  return (
    <>
      <h3>Cargando</h3>
      <Ring size={40} lineWeight={5} speed={2} color="white" />
    </>
  );
}

export default Loader;
