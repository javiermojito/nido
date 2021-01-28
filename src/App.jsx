import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Metadata from "./components/Metadata";


class App extends React.Component {

  render() {
    return (
      <HashRouter >
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cursos" component={Courses} />
            <Route path ="/cursos" component={Course}/>
            <Route exact path ="/contacto" component={Contact}/>
            <Route exact path ="/metadata" component={Metadata}/>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
