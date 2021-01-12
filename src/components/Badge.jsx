import React from "react";
import { useHistory } from "react-router-dom";

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
        className="cursor-pointer flex flex-row rounded-xl h-56 min-h-0 md:min-h-full  bg-white shadow-md transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-20 hover:shadow-lg"
        onClick={this.handleClick.bind(this)}
      >
        <div
          className=" flex flex-wrap content-center rounded-l-xl w-1/3 "
          style={this.props.backgroundStyle}
        >
          <img
            className="w-170 h-225 inline-block align-middle mx-auto"
            src={this.props.image}
            alt={this.props.imageAlt}
          />
        </div>
        <div className="flex flex-wrap content-between p-8 w-2/3">
          <div>
            <div className="text-xl font-medium text-black">
              {this.props.title}
            </div>
            <div className="h-1">
              <p className="text-gray-500 overflow-ellipsis">
                {this.props.description}
              </p>
            </div>
          </div>

          <div>
            <p>
              <span className="font-bold">Duración:</span> {this.props.duration}
            </p>
            <p>
              <span>{this.props.numUnits}</span> unidades -{" "}
              <span>{this.props.numSubjects}</span> temas
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
