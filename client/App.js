import React, { Component } from "react";
import Mainpage from "./Mainpage";
import { Data } from "../imports/api/data.js";
import { withTracker } from 'meteor/react-meteor-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Mainpage />
        </header>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    data: Data.find({}).fetch(),
  };
})(App);
