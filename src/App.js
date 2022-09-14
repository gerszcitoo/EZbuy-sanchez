import './App.css';
import * as React from "react";
import Button from '@mui/material/Button';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido a EZbuy"/>
        <Button variant="contained">¡Quiero Comprar!</Button>
      </header>
    </div>
  );
}

export default App;
