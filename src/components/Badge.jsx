import React from "react";
import { useHistory } from "react-router-dom";
import { faBook, faTasks, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Badge.css";

class Badge extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.history.push(this.props.courseRoute);
  }

  render() {
    return (
      <div
        className="cursor-pointer flex flex-row rounded-xl h-28 sm:h-40 min-h-0 bg-white shadow-md transition duration-400 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        onClick={this.handleClick.bind(this)}
      >
        <div className=" flex flex-wrap content-center rounded-l-xl w-1/3" style={this.props.backgroundStyle}>
          <img className="h-20 sm:h-28 inline-block align-middle mx-auto" src={this.props.image} alt={this.props.imageAlt}/>
        </div>
        <div className="flex flex-col justify-between	gap-x-auto w-4/5 pl-4 pt-2 sm:pl-4 sm:pr-4 sm:pt-4 sm:pb-2">
          <React.Fragment>
          <div >
            <div className="text-lg lg:text-xl font-medium">
              {this.props.title}
            </div>
            <div className="description hidden sm:inline w-full h-12" >
              <div>
                <p className="text-gray-500">{this.props.description}</p>
              </div>
            </div>
          </div>
          </React.Fragment>
          <div className="text-sm flex flex-col sm:flex-row sm:gap-x-4 pb-3 ">
            <div>
              <FontAwesomeIcon icon={faBook} /> {this.props.numUnits} Unidades
            </div>
            <div>
              <FontAwesomeIcon icon={faTasks} /> {this.props.numSubjects} temas
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} /> {this.props.duration} minutos
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
