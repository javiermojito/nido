import React from "react";
import ReactModal from "react-modal";

import CourseBanner from "../components/CourseBanner";
import ActionButtons from "../components/ActionButtons";
import CourseHero from "../components/CourseHero";
import Content from "../components/Content";
import UpNext from "../components/UpNext";
import { getCourseFromId, getCourseFromPath } from "../data";
import Metadata from "../components/Metadata";
import MetadataXML from "../components/MetadataXML";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showTable: true,
      showXML: false,
    };
    var path = props.location.pathname;
    getCourseFromPath(path);
    this.course = getCourseFromPath(path);
    this.upNext = getCourseFromId(this.course.upNext);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleShowLeftPanel = this.handleShowLeftPanel.bind(this);
    this.handleShowRightPanel = this.handleShowRightPanel.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowLeftPanel() {
    this.setState({ showTable: true, showXML: false });
  }

  handleShowRightPanel() {
    this.setState({ showTable: false, showXML: true });
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
              className="font-poppins font-semibold outline-none focus:outline-none"
              onClick={this.handleOpenModal}
            >
              Ver Metadata
            </button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModal}
              style={{ content: { padding: 0 } }}
            >
              <div className="w-full flex flex-wrap bg-gray-100 pr-5 shadow-md justify-between content-center">
                <div className="flex flex-row">
                  <button
                    className="text-left text-sm border-2 h-full w-auto pt-2 pb-2 pl-4 pr-4 text-center font-poppins font-medium text-black hover:bg-gray-50	rounded-sm bg-white focus:bg-blue-100  focus:outline-none	"
                    onClick={this.handleShowLeftPanel}
                  >
                    Tablas
                  </button>

                  <button
                    className="text-left text-sm border-2 h-full w-auto pt-2 pb-2 pl-4 pr-4 text-center font-poppins font-medium text-black hover:bg-gray-50 rounded-sm bg-white focus:bg-blue-100 focus:outline-none border-l-0 "
                    onClick={this.handleShowRightPanel}
                  >
                    XML
                  </button>
                </div>

                <button
                  className="text-left text-3xl outline-none focus:outline-none"
                  onClick={this.handleCloseModal}
                >
                  <FontAwesomeIcon icon={faTimes} color="gray" />
                </button>
              </div>
              <div className="w-full">
                {this.state.showTable && <Metadata {...this.course} />}
                {this.state.showXML && <MetadataXML {...this.course} />}
              </div>
            </ReactModal>
          </div>
        </div>
        <Content {...this.course} />
        <ActionButtons {...this.course} />
        {/* <UpNext {...this.upNext} /> */}
      </React.Fragment>
    );
  }
}

export default Course;
