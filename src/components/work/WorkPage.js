import React from "react";
import { Route, Switch } from "react-router-dom";
import Print from "./detail_work/Print";
import Interactive from "./detail_work/Interactive";
import Video from "./detail_work/Video";
import MrLabs from "./detail_work/MrLabs";

const WorkPage = () => {
  return (
    <div>
      <h2>My Work</h2>
      <p>This is where the magic happens.</p>
      <Switch>
        <Route path="/work/print" component={Print} />
        <Route path="/work/interactive" component={Interactive} />
        <Route path="/work/video" component={Video} />
        <Route path="/work/labs" component={MrLabs} />
      </Switch>
    </div>
  );
};

export default WorkPage;
