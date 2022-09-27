import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  // -----NAVBAR RETURN-----
  return (
    <nav className="navbar">
      <Link className="nav-logo" to="/">
        <p>EZbuy</p>
      </Link>
      <div className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="nav-list">
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
        <Link className="nav-item" to="">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
