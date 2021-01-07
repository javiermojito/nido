import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> inicio </Link>
          </li>
          <li>
            <Link to="/cursos"> Cursos </Link>
          </li>
          <li>
            <Link to="/contacto"> Contacto </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
