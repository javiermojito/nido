import React from "react";
import CourseHero from "./components/CourseHero";

const Temporal = (props) => {
  var course1 = {
    ...props,
    title: "Introducción al diseño",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros mi",
    image: "https://i.imgur.com/4VkW8FW.png",
    imageHR: "https://i.imgur.com/jywVD4h.png",
    imageAlt: "Logo introducción al diseño",
    backgroundStyle: { backgroundColor: "#B7B6B6" },
    duration: "20 minutes",
    courseRoute: "/cursos/introduccion-diseño",
    numUnits: 5,
    numSubjects: 15,
  };

  return <CourseHero {...course1}/>;
};

export default Temporal;
