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
import Generation from "./components/Generation";
import Member22th from "./components/Member22th";
import Member23th from "./components/Member23th";

const Pages: React.FC = props => {
  return (
    <Router history={history}>
      <Switch>
        <BaseWrapper>
          <Route exact path="/" component={Top} />
          <Route exact path="/Aboutus" component={Aboutus} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/QandA" component={QandA} />
          <Route exact path="/Member" component={Member} />
          <Route exact path="/Events" component={Events} />
          <Route
            exact
            path="/generation/22th"
            render={() => (
              <Generation
                number={22}
                text={
                  <div>
                    22thのメンバーはこれと言って面白い人はいま
                    <br />
                    せん笑。その代わり誰とでも仲良くできるのが
                    <br />
                    この代のいいところです！一人一人個性があっ
                    <br />
                    てお互い助け合いながら楽しく活動しています
                    <br />
                    ！ダイビングにかける思いが熱い人が多いとこ
                    <br />
                    ろも22thのいいところです！
                  </div>
                }
                member={Member22th}
              />
            )}
          />
          <Route
            exact
            path="/generation/23th"
            render={() => (
              <Generation number={23} text={<div></div>} member={Member23th} />
            )}
          />
          {/* <Route exact path="*">
            <Redirect to="/" />
          </Route> */}
        </BaseWrapper>
      </Switch>
    </Router>
  );
};

export default Pages;
