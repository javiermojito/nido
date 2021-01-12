import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Temporal from "./Temporal";
import Temporal2 from "./Temporal2";
import Courses from "./pages/Courses";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Temporal} />
            <Route exact path="/cursos" component={Courses} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
