import { render } from "@testing-library/react";
import React from "react";

class EmbedComponent extends React.Component{
  iframe(){
    return {
      __html: this.props.iframe,
    };
  }

  render(){
    return (
      
        <div className="w-full h-full" dangerouslySetInnerHTML={this.iframe()} />
      
    );
  }
}

export default EmbedComponent;
