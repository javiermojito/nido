import React from "react";
import "./css/CourseBadge.css";
import { useHistory } from "react-router-dom";

class CourseBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.history.push(this.props.courseRoute);
  }

  render() {
    return (
      <div className="badge" onClick={this.handleClick.bind(this)}>
        <div className="bagde-img" style={this.props.backgroundStyle}>
          <img src={this.props.image} alt={this.props.imageAlt} />
        </div>
        <div className="bagde-info">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <br />
          <p>
            <span id="badge-duracion">Duración:</span> {this.props.duration}
          </p>
          <p>
            <span>#</span> unidades - <span>#</span> temas
          </p>
        </div>
      </div>
    );
  }
}

export default CourseBadge;
