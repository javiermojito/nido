import React from "react";
import { Switch, Route, HashRouter, BrowserRouter } from "react-router-dom";

import Temporal from "./Temporal";
import Temporal2 from "./Temporal2";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Temporal} />
            <Route exact path="/cursos" component={Temporal2} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
