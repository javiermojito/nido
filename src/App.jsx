import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";


class App extends React.Component {

  render() {
    return (
      <HashRouter >
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cursos" component={Courses} />
            <Route path ="/cursos" component={Course}/>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
