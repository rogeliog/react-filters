import React, { Component } from 'react';
import { Img } from './Img'
import { ImgControl } from './ImgControl'

export class ImgEditor extends Component {
  constructor() {
    super();
    this.state = { transforms: []};
    this.handleControlChange = this.handleControlChange.bind(this);
  }

  handleControlChange(filterName, unit) {
    return (e) => {
      const newState = {};
      newState[filterName] = e.target.value + unit;
      this.setState(Object.assign({}, this.state, newState));
    }
  }

  componentDidMount() {
    this.setState(Object.assign({}, this.state, {
      transforms: this.props.transforms
    }));
  }

  getTransformAttrs() {
    return this.state.transforms.reduce((prev, current) => {
      prev[current.name] = this.state[current.name];
      return prev;
    }, {})
  }

  render() {
    const imgAttrs = Object.assign({
      src: 'http://lorempixel.com/200/200/'
    }, this.getTransformAttrs());

    const transformAttrs = this.state.transforms.map((transform) => {
      return Object.assign({
        onChange: this.handleControlChange(transform.name, transform.unit)
      }, transform);
    });

    console.log(transformAttrs);
    return (
      <div>
        { transformAttrs.map((transformAttr) => React.createElement(ImgControl, transformAttr)) }
        { React.createElement(Img, imgAttrs) }
      </div>
    );
  }
}

