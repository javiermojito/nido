import React from "react";
import "./css/Header.css";

import { Link } from "react-router-dom";

const HeaderCSS = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <div className="nav-logo-left-section"></div>
        </Link>
        <ul className="nav-right-section">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderCSS;
