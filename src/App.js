import React, { Component } from 'react';

class Img extends Component {
  filterNames = ['grayscale', 'blur', 'sepia', 'opacity', 'drop-shadow'];

  render() {
    const filters = this.filterNames.map((filter) => {
      const value = this.props[filter];
      if (value) {
        return `${filter}(${value})`
      }
    }).join(' ');

    const style = {
      WebkitFilter: filters
    }

    console.log(this.props.grayscale);
    return <img src={this.props.src} style={style} />
  }
}

class ImgControl extends Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <input type="range" onChange={this.props.onChange} max={this.props.max}/>
        </div>
    )
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleControlChange = this.handleControlChange.bind(this);
  }

  handleControlChange(filterName, unit) {
    return (e) => {
      const newState = {};
      newState[filterName] = e.target.value + unit;
      this.setState(Object.assign({}, this.state, newState));
    }
  }

  render() {
    const { grayscale, blur, sepia}  = this.state;
    console.log(grayscale);
    return (
      <div>
        <ImgControl onChange={this.handleControlChange('grayscale', '%')} name="grayscale" />
        <ImgControl onChange={this.handleControlChange('sepia', '%')} name="sepia" />
        <ImgControl onChange={this.handleControlChange('blur', 'px')} name="blur" max='25'/>
        <Img src="http://lorempixel.com/600/600/" grayscale={grayscale} blur={blur} sepia={sepia}}/>
        </div>
    );
  }
}
