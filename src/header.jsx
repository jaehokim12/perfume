import React, { Component } from 'react';
import './header.css';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30,
    };
  }
  render() {
    // this.setState({
    //   age: this.state.age,
    // });
    return <div className="headerContainer">{this.state.age}</div>;
  }
}

export default header;
