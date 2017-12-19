import React from 'react';
import Display from './display';
import Buttons from './buttons';

export default class App extends React.Component{
  render() {
    return (
      <div className="app-container">
        <h1>Simple Calculator</h1>
        <Display />
        <Buttons />
      </div>
    )
  }
}