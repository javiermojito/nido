import React from "react";
import "./css/NotFound.css";

const NotFound = () => {
  return (
    <div className="info-container">
      <div className="image-left-container">
        <img src="" alt="" />
      </div>
      <div className="info-right-container">
        <h2>404 NOT FOUND</h2>
        <p>
          El recurso al que intentas acceder...
          <br /> al parecer...
          <br /> <b>no existe.</b>
        </p>
        Illustration by <a href="http://www.saramaese.com/">Sara Maese</a> from{" "}
        <a href="https://icons8.com/">Icons8</a>
      </div>
    </div>
  );
};

export default NotFound;
