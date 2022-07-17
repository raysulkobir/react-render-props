import React, { Component } from 'react';
import Lifecycle from "../src/component/Lifecycle"

import 'react-quill/dist/quill.snow.css';
import ReactHigherOrderComponents from "./component/React Higher Order Components";
import Counter from "./component/Counter";
import ReactHigherOrderComponentsHover from "./component/React Higher Order Components hover";






class SimpleMap extends Component {

  render() {
    return (
      <div>
          {/*<User name="Rubel"/>*/}
          {/*<User name={(isLoggedIn) => ( isLoggedIn ?  "Ruble -2" : "not" )}/>*/}

          <Counter render={(count, incrementCount) => (
              <ReactHigherOrderComponents count={count} incrementCount={incrementCount}/>
          )}/>

          <Counter render={(count, incrementCount) => (
              <ReactHigherOrderComponentsHover count={count} incrementCount={incrementCount}/>
          )}/>


      </div>
    );
  }
}

export default SimpleMap;