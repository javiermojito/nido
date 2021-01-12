import React from "react";
import CourseBadge from "../components/CourseBadge";
import Badge from "../components/Badge";

const Courses = (props) => {
  var course1 = {
    ...props,
    title: "Introducción al diseño",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros mi",
    image: "https://i.imgur.com/GN8qjFu.png",
    imageAlt: "Logo introducción al diseño",
    backgroundStyle: { backgroundColor: "#B7B6B6" },
    duration: "20 minutes",
    courseRoute: "/cursos/introduccion-diseño",
    numUnits: 5,
    numSubjects: 15,
  };

  var course2 = {
    ...props,
    title: "Teoría del color",
    description:
      "Mauris luctus aliquet dui commodo fringilla. Vivamus porta risus a arcu mattis, at volutpat ante auctor. Nunc interdum facilisis ex.",
    image: "https://i.imgur.com/J4dXVjY.png",
    imageAlt: "Logo Teoría de color",
    backgroundStyle: { backgroundColor: "#222222" },
    duration: "30 minutes",
    courseRoute: "/cursos/teoria-color",
    numUnits: 6,
    numSubjects: 23,
  };

  var course3 = {
    ...props,
    title: "Diseño UX",
    description:
      "Praesent bibendum venenatis erat, a congue ligula tincidunt a. In mauris lorem, dapibus quis lobortis non, efficitur a nisi. Suspendisse turpis orci, facilisis eu erat eget, rhoncus aliquet eros.",
    image: "https://i.imgur.com/6BhOe0c.png",
    imageAlt: "Logo Diseño UX",
    backgroundStyle: { backgroundColor: "#342343" },
    duration: "30 minutes",
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
    imageAlt: "Logo Diseño UI/UX",
    backgroundStyle: { backgroundColor: "#4E410E" },
    duration: "30 minutes",
    courseRoute: "/cursos/diseno-uiux",
    numUnits: 6,
    numSubjects: 23,
  };

  return (
    <React.Fragment>
      <div className="text-5xl font-bold ml-20 mt-10 ">Cursos</div>
      <div className="flex-wrap content-start grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-x-8 gap-y-8  mt-10 m-5">
        <div>
          <Badge {...course1} />
        </div>
        <div>
          <Badge {...course2} />
        </div>
        <div>
          <Badge {...course3} />
        </div>
        <div>
          <Badge {...course4} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Courses;