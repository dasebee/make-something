import React from 'react';
import Display from './display';
import Buttons from './buttons';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1> App.js </h1>
        <Display />
        <Buttons />
      </div>
    )
  }
}