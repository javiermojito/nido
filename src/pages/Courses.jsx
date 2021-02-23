import React from "react";
import CourseBadge from "../components/CourseBadge";
import Badge from "../components/Badge";
import {getCourses} from "../data";

const Courses = (props) => {
  var data = getCourses();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  return (
    <div className=" h-auto pb-28 lg:pb-32 xl:h-screen/80v xl:pb-32 ">
      <div className="text-5xl font-bold text-center mt-20 sm:ml-20 sm:text-left">Cursos</div>
      <div className="flex-wrap content-start grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-x-5 gap-y-5  mt-10 m-5 xl:m-14">
        <div>
          <Badge {...data[0]} />
        </div>
        <div>
          <Badge {...data[1]} />
        </div>
        {/* <div>
          <Badge {...data[2]} />
        </div>
        <div>
          <Badge {...data[3]} />
        </div> */}
      </div>
    </div>
  );
};

export default Courses;
