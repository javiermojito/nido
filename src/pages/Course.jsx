import React from "react";
import CourseHero from "../components/CourseHero";
import Content from "../components/Content";
import UpNext from "../components/UpNext";
import { getCourseFromId, getCourseFromPath } from "../data";


class Course extends React.Component {
  constructor(props) {
    super(props);
    var path = props.location.pathname;
    getCourseFromPath(path)
    this.course = getCourseFromPath(path);    
    this.upNext = getCourseFromId(this.course.upNext);
  }

  componentDidMount(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <React.Fragment>
        <CourseHero {...this.course} />
        <Content {...this.course}/>
        <UpNext {...this.upNext}/>
      </React.Fragment>
    );
  }
}

export default Course;
