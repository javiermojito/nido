import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-white mx-auto p-2 font-header shadow-sm">
      <nav className="flex justify-between">
        <Link to="/"> <img className="w-1/7 h-12 ml-4" src="https://i.imgur.com/v3hO1M0.png"alt="nido logo"/> </Link>
        <div className="h-full my-auto">
          <ul className="headerTailwind flex flex-row content-center">
            <li className="pr-3 text-sm md:pr-5 md:text-md hover:underline "><Link to="/inicio">Inicio</Link></li>
            <li className="pr-3 text-sm md:pr-5 md:text-md hover:underline"><Link to="/cursos">Cursos</Link></li>
            <li className="pr-3 text-sm md:pr-5 md:text-md hover:underline"><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
