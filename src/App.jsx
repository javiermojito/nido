import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Temporal from "./Temporal";
import Temporal2 from "./Temporal2";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Temporal} />
          <Route exact path="/cursos" component={Temporal2} />
          {/* <Route exact path="/contacto" component={} /> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
