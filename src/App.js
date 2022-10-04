import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido a EZbuy" />}
            />
            <Route path="/categorias/" element={<CategoryContainer />} />
            <Route
              path="/categorias/:cat"
              element={<ItemListContainer greeting="Bienvenido a EZbuy" />}
            />
            <Route path="/autos/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<h1>Cart</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
