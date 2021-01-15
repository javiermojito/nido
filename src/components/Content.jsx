import React from "react";
import EmbedComponent from "./EmbedComponent";
import ActionButtons from "./ActionButtons";
import Badge from "./Badge";
import { faBook, faTasks, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = (props) => {
  var frame =
    '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>';

    var course3 = {
      ...props,
      title: "Diseño UX",
      description:
        "Praesent bibendum venenatis erat, a congue ligula tincidunt a. In mauris lorem, dapibus quis lobortis non, efficitur a nisi. Suspendisse turpis orci, facilisis eu erat eget, rhoncus aliquet eros.",
      image: "https://i.imgur.com/6BhOe0c.png",
      imageHR: "https://i.imgur.com/ZEE7h01.png",
      imageAlt: "Logo Diseño UX",
      backgroundStyle: { backgroundColor: "#342343" },
      textColor: {color:"#FFF"},
      duration: "30",
      courseRoute: "/cursos/diseno-ui",
      numUnits: 6,
      numSubjects: 23,
    };
  
    var course4 = {
      ...props,
      title: "Diseño UI/UX",
      description:
        "Proin non sapien bibendum, accumsan neque vitae, maximus ante. Fusce placerat ultricies justo ut interdum. Sed ut eleifend mi. Sed ullamcorper condimentum sapien.",
      image: "https://i.imgur.com/DZihR3o.png",
      imageHR: "https://i.imgur.com/ypQQWEY.png",
      imageAlt: "Logo Diseño UI/UX",
      backgroundStyle: { backgroundColor: "#4E410E" },
      textColor: {color:"#FFF"},
      duration: "30",
      courseRoute: "/cursos/diseno-uiux",
      numUnits: 6,
      numSubjects: 23,
    };

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center pt-5 pb-5 bg-white shadow-sm">
        <div className="w-2/3">
          <div className="text-black font-medium text-lg pb-4 text-center sm:text-left lg:text-xl">
            Objeto Virtual de Aprendizaje
          </div>
          <div className="flex flex-row gap-x-5 justify-center text-center sm:justify-start">
            <div>
              <FontAwesomeIcon icon={faBook} /> {props.numUnits} Unidades
            </div>
            <div>
              <FontAwesomeIcon icon={faTasks} /> {props.numSubjects} temas
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} /> {props.duration} minutos
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-5 mb-5">
        <div className="w-4/5 sm:w-2/3  h-64 lg:h-screen">
          <a
            className="lg:hidden cursor-pointer"
            href="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8"
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
          <div className="w-full h-full hidden lg:inline">
            <EmbedComponent iframe={frame} />
          </div>
        </div>
      </div>
      <ActionButtons />
      <div className="bg-white w-full">
        <div className="pt-7 pb-7 w-auto sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="font-semibold text-2xl text-center text-grey-600 pb-3">
            Continúa con:
          </div>
          <div className="m-4">
            <Badge {...course3}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
