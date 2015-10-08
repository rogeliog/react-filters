import React, { Component } from 'react';
import { Img } from './Img'

export class App extends Component {
  render() {
    return (
      <div>
        <Img grayscale="50" src="http://lorempixel.com/200/200" style={{ border: '200px solid #0f0' }}/>
        <Img blur="100" src="http://lorempixel.com/200/200"/>
        <Img grayscale="100" src="http://lorempixel.com/200/200"/>
        <Img grayscale="100" src="http://lorempixel.com/200/200"/>
        <Img grayscale="100" src="http://lorempixel.com/200/200"/>
      </div>
    );
  }
}
