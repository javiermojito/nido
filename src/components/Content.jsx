import React from "react";
import EmbedComponent from "./EmbedComponent";

const Content = () => {
  var frame =
    '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>';

  return (
    <div className="flex flex-wrap justify-center mt-5 mb-5">
      {/* <div>
      <div>Objeto Virutal de Aprendizaje (OVA)</div>
      <div>
        <div>4 Unidades - 25 temas</div>
        <div>20 minutos</div>
      </div>
    </div> */}
      <div className="w-4/5 h-64 lg:h-screen">
        <a
          className="lg:hidden cursor-pointer"
          href="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8"
        >
          {" "}
          {/* IMPORTANTE CAMBIAR EL ENLACE  TODO*/}
          <div className="rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 w-full h-full flex flex-wrap content-center shadow-md  lg:shadow-none transition duration-400 ease-in-out transform hover:-translate-y-0.5">
            <img
              className="mx-auto"
              src="https://i.imgur.com/h6QYw4a.png"
              alt="Play icon"
            />
          </div>
        </a>

        <div className="w-full h-full hidden lg:inline">
          <EmbedComponent iframe={frame} />
        </div>
      </div>
    </div>
  );
};

export default Content;
