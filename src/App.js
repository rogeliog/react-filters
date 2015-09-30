import React, { Component } from 'react';

class Img extends Component {
  filterNames = ['grayscale', 'blur', 'sepia', 'opacity', 'drop-shadow'];
  transformNames = ['rotate', 'scaleX'];

  constructor() {
    super();
    this.toCSSProp = this.toCSSProp.bind(this);
  }

  toCSSProp(rawProp) {
      const value = this.props[rawProp];
      if (value) {
        return `${rawProp}(${value})`
      }
  }

  render() {
    const filters = this.filterNames.map(this.toCSSProp).join(' ');
    const transformations = this.transformNames.map(this.toCSSProp).join(' ');

    const style = {
      WebkitFilter: filters,
      transform: transformations
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
        <input type="range" onChange={this.props.onChange} min={this.props.min} max={this.props.max} step={this.props.step}/>
        </div>
    )
  }
}

class ImgEditor extends Component {
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
    const { grayscale, rotate, scaleX }  = this.state;
    console.log(grayscale);
    return (
      <div>
        <ImgControl onChange={this.handleControlChange('grayscale', '%')} name="grayscale" />
        <ImgControl onChange={this.handleControlChange('rotate', 'deg')} name="rotate" />
        <ImgControl onChange={this.handleControlChange('scaleX', '')} name="scaleX" min="0.5" max="4" step="0.5"/>
        <Img src="http://lorempixel.com/600/600/" grayscale={grayscale} rotate={rotate} scaleX={scaleX}/>
        </div>
    );
  }
}

export class App extends Component {
  render() {
    return <ImgEditor />
  }
}
