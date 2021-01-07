import React from "react";
import "./css/CourseBadge.css";

class CourseBadge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="bagde-img" style={this.props.style}>
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
