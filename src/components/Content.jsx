import React from "react";
import EmbedComponent from "./EmbedComponent";

const Content = () => {
  var frame =
    '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>';

  return (
    <div className="flex flex-wrap justify-center mt-5 mb-5">
      <div className="w-4/5 h-64 bg-white lg:h-screen">
        <a
          className="lg:hidden cursor-pointer"
          href="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8"
        >
          {" "}
          {/* IMPORTANTE CAMBIAR EL ENLACE */}
          <div className="rounded-xl bg-gradient-to-br from-green-600 via-green-500 to-green-400 w-full h-full flex flex-wrap content-center">
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
