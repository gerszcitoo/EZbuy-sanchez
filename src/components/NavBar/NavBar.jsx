import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        <p>EZbuy</p>
      </Link>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <Link className="nav-item" to="/">
            <li>Inicio</li>
          </Link>
          <Link className="nav-item" to="/categorias">
            <li>Categorías</li>
          </Link>
          <Link className="nav-item" to="/">
            <li>Tienda</li>
          </Link>
          <Link className="nav-item" to="">
            <li>Contacto</li>
          </Link>
          <Link className="nav-item" to="/cart">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
