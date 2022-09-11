import "./NavBar.css"

function NavBar() {
    return (
      <nav className="navbar">
        <a className="nav-item" href=""><p>EZbuy</p></a>
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