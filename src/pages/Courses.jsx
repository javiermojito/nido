import React from "react";
import CourseBadge from "../components/CourseBadge";
import Badge from "../components/Badge";
import {getCourses} from "../data";

const Courses = (props) => {
  var data = getCourses();

  return (
    <div className=" h-auto pb-36 xl:h-screen/70v xl:pb-0">
      <div className="text-5xl font-bold text-center mt-20 sm:ml-20 sm:text-left">Cursos</div>
      <div className="flex-wrap content-start grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-x-8 gap-y-5  mt-10 m-5">
        <div>
          <Badge {...data[0]} />
        </div>
        <div>
          <Badge {...data[1]} />
        </div>
        <div>
          <Badge {...data[2]} />
        </div>
        <div>
          <Badge {...data[3]} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
