import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Temporal from "./Temporal";
import Temporal2 from "./Temporal2";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/nido/" component={Temporal} />
          <Route exact path="/nido/cursos" component={Temporal2} />
          {/* <Route exact path="/contacto" component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
