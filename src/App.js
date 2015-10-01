import React, { Component } from 'react';
import { ImgEditor } from './ImgEditor'

export class App extends Component {
  render() {
    const transforms = [ {name: 'grayscale', unit: '%'} ];
    return (<ImgEditor transforms={transforms}/>);
  }
}
