import React, { Component } from 'react';
import { Img } from './Img'

class ShowcaseItem extends Component {
  render() {
    const style = {
      color: '#666',
      paddingTop: '30px'
    };
    return (
      <div style={style}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export class App extends Component {
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    };
    return (
      <div style={style}>
        <h1>React Filters</h1>
        <ShowcaseItem title="Saturate 200%">
          <Img saturate="200" src="http://lorempixel.com/400/400" />
        </ShowcaseItem>

        <ShowcaseItem title="Grayscale 100%">
          <Img grayscale="100" src="http://lorempixel.com/400/400" />
        </ShowcaseItem>

        <ShowcaseItem title="Brightness 80% and Blur 5px">
          <Img brightness="80" blur="5px" src="http://lorempixel.com/400/400" />
        </ShowcaseItem>

        <ShowcaseItem title="Sepia 70% and Contrast 500%">
          <Img sepia="70" contrast="500" src="http://lorempixel.com/400/400" />
        </ShowcaseItem>
      </div>
    );
  }
}
