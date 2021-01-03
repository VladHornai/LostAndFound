import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "./App";
import Mainpage from "./Mainpage";
//import * as serviceWorker from "./serviceWorker";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});

