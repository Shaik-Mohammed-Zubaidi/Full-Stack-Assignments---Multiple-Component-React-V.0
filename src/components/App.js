import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data- ns- test="project- name">
          What To Do!
        </h1>
        <p data- ns- test="project- description">
          A site which will show you a list of things you can do from games to
          courses and also keeps tracks of your progresses
        </p>
      </>
    );
  }
}

export default App;
