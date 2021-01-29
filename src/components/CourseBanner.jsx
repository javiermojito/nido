import React from "react";
import CourseHero from "./CourseHero";
import { faBook, faTasks, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseBanner = (props) => {
  return (
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
  );
};

export default CourseBanner;
