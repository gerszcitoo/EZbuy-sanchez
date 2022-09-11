import "./NavBar.css"

function NavBar() {
  // -----NAVBAR RETURN-----
    return (
      <nav className="navbar">
        <a className="nav-logo" href=""><p>EZbuy</p></a>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className="nav-list">
          <a className="nav-item" href=""><li>Inicio</li></a>
          <a className="nav-item" href=""><li>Servicios</li></a>
          <a className="nav-item" href=""><li>Tienda</li></a>
          <a className="nav-item" href=""><li>Contacto</li></a>
        </ul>
      </nav>
    );
  }

export default NavBar;