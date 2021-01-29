import React from "react";
import EmbedComponent from "./EmbedComponent";

import Badge from "./Badge";
import { getCourseFromId } from "../data";

const Content = (props) => {
  return (
    <React.Fragment>
      <div className="mt-4 mb-0 lg:mt-4 lg:mb-10">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-4/5 sm:w-2/3 h-64 lg:h-180 ">
            <a
              className="lg:hidden cursor-pointer"
              href={props.linkFrame}
            >
              {/* IMPORTANTE CAMBIAR EL ENLACE  TODO*/}
              <div className="rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 w-full h-full flex flex-wrap content-center shadow-md  lg:shadow-none transition duration-400 ease-in-out transform hover:-translate-y-0.5">
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/material-sharp/96/ffffff/circled-play.png"
                  alt="Play icon"
                />
              </div>
            </a>
            <div className="w-full h-full hidden lg:inline mt-0">
              <EmbedComponent iframe={props.frame} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
