import React, { Component } from 'react';
import {filters as filterNames} from './filters'

export class Img extends Component {
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
    const filters = filterNames.map(this.toCSSProp).join(' ');
    const style = { WebkitFilter: filters }
    return <img src={this.props.src} style={style} />
  }
}

