import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "../utils/history";

import BaseWrapper from "./BaseWrapper";

import Top from "./components/Top";
import Aboutus from "./components/Aboutus";
import Gallery from "./components/Gallery";
import QandA from "./components/QandA";
import Member from "./components/Member";
import Events from "./components/Events";

const Pages: React.FC = props => {
  return (
    <Router history={history}>
      <Switch>
        <BaseWrapper>
          <Route exact path="/" component={Top} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/qanda" component={QandA} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/events" component={Events} />
          {/* <Route exact path="*">
            <Redirect to="/" />
          </Route> */}
        </BaseWrapper>
      </Switch>
    </Router>
  );
};

export default Pages;
