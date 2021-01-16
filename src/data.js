var data = [
  {
    id: 0,
    title: "Introducción al diseño",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros mi",
    image: "https://i.imgur.com/4VkW8FW.png",
    imageHR: "https://i.imgur.com/jywVD4h.png",
    imageAlt: "Logo introducción al diseño",
    backgroundStyle: { backgroundColor: "#B7B6B6" },
    textColor: { color: "#000" },
    duration: "20",
    courseRoute: "/cursos/introduccion-diseño",
    numUnits: 5,
    numSubjects: 15,
    frame:
      '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>',
    upNext:1,
  },
  {
    id: 1,
    title: "Teoría del color",
    description:
      "Mauris luctus aliquet dui commodo fringilla. Vivamus porta risus a arcu mattis, at volutpat ante auctor. Nunc interdum facilisis ex.",
    image: "https://i.imgur.com/J4dXVjY.png",
    imageHR: "https://i.imgur.com/CXbaTua.png",
    imageAlt: "Logo Teoría de color",
    backgroundStyle: { backgroundColor: "#222222" },
    textColor: { color: "#FFF" },
    duration: "30",
    courseRoute: "/cursos/teoria-color",
    numUnits: 6,
    numSubjects: 23,
    frame:
      '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>',
    upNext:2,
  },
  {
    id: 2,
    title: "Diseño UX",
    description:
      "Praesent bibendum venenatis erat, a congue ligula tincidunt a. In mauris lorem, dapibus quis lobortis non, efficitur a nisi. Suspendisse turpis orci, facilisis eu erat eget, rhoncus aliquet eros.",
    image: "https://i.imgur.com/6BhOe0c.png",
    imageHR: "https://i.imgur.com/ZEE7h01.png",
    imageAlt: "Logo Diseño UX",
    backgroundStyle: { backgroundColor: "#342343" },
    textColor: { color: "#FFF" },
    duration: "30",
    courseRoute: "/cursos/diseno-ui",
    numUnits: 6,
    numSubjects: 23,
    frame:
      '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>',
    upNext:3,
  },
  {
    id: 3,
    title: "Diseño UI/UX",
    description:
      "Proin non sapien bibendum, accumsan neque vitae, maximus ante. Fusce placerat ultricies justo ut interdum. Sed ut eleifend mi. Sed ullamcorper condimentum sapien.",
    image: "https://i.imgur.com/DZihR3o.png",
    imageHR: "https://i.imgur.com/ypQQWEY.png",
    imageAlt: "Logo Diseño UI/UX",
    backgroundStyle: { backgroundColor: "#4E410E" },
    textColor: { color: "#FFF" },
    duration: "30",
    courseRoute: "/cursos/diseno-uiux",
    numUnits: 6,
    numSubjects: 23,
    frame:
      '<iframe width="100%" height="100%" src="https://iseazy.com/dl/1e130595a01a452197e919c2db8bb5b8" frameborder="0" allowfullscreen/>',
    upNext:1,
  },
];

export function getCourses() {
  return data;
}

export function getCourseFromPath(path) {
  return data.find((c) => {
    if (c.courseRoute === path) {
      return c;
    }
  });
}

export function getCourseFromId(id){
  return data.find((c) => {
    if (c.id === id) {
      return c;
    }
  });
}
