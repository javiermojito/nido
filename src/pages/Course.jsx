import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

import CourseBanner from "../components/CourseBanner";
import ActionButtons from "../components/ActionButtons";
import CourseHero from "../components/CourseHero";
import Content from "../components/Content";
import UpNext from "../components/UpNext";
import { getCourseFromId, getCourseFromPath } from "../data";
import Metadata from "../components/Metadata";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    var path = props.location.pathname;
    getCourseFromPath(path);
    this.course = getCourseFromPath(path);
    this.upNext = getCourseFromId(this.course.upNext);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <React.Fragment>
        <CourseHero {...this.course} />
        <CourseBanner {...this.course} />
        <div className="flex flex-wrap justify-center pt-10">
          <div className="flex flex-wrap w-2/3 sm:pr-6 content-end justify-end">
            <button
              className="font-poppins font-semibold"
              onClick={this.handleOpenModal}
            >
              Ver Metadata
            </button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModal}
            >
              <div className="w-full flex flex-wrap content-end justify-end bg-gray-100 pr-5 pt-3">
                <button
                  className="text-left text-3xl"
                  onClick={this.handleCloseModal}
                >
                  <FontAwesomeIcon icon={faTimes} color="gray"/>
                </button>
              </div>
              <div className="w-full ">
                <Metadata />
              </div>
            </ReactModal> 
          </div>
        </div>
        <Content {...this.course} />
        <ActionButtons {...this.course} />
        <UpNext {...this.upNext} />
      </React.Fragment>
    );
  }
}

export default Course;
