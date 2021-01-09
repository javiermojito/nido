import React from "react";
import CourseBadge from "./components/CourseBadge";

const Temporal2 = (props) => {
  var tempo = {
    ...props, //IMPORTANTÍSIMO, AQUÍ VA HISTORY DE REACT ROUTER
    title: "Introducción al diseño",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros mi",
    image: "https://i.imgur.com/GN8qjFu.png",
    imageAlt: "Logo introducción al diseño",
    backgroundStyle: { backgroundColor: "#B7B6B6" },
    duration: "20 minutes",
    courseRoute: "/klasdjfalsñkdf",
  };
  return <CourseBadge {...tempo} />;
};

export default Temporal2;
