import './App.css';
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemDetailContainer/>
        {/* <ItemListContainer greeting="Bienvenido a EZbuy"/> */}
      </header>
    </div>
  );
}

export default App;