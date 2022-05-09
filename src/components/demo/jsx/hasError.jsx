import React, { Component } from 'react';
class HasErrorDemo extends React.Component {
  state = {
    list: [1, 2, 3]
    // list: null,
  };
  render () {
    return (
      <>
        <ul>
          {this.state.list.map((i, index) =>
            <li key={index}>{i}</li>
          )}
        </ul>
      </>
    );
  }
}

export default HasErrorDemo;
