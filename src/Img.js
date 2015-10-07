import React, { Component } from 'react';
import { filters } from './filters';

export class Img extends Component {
  render() {
    const style = Object.assign(this._getStyles(), this.props.style);
    return <img src={this.props.src} style={style} />;
  }

  _getStyles() {
    const cssFilters = filters.filter((filter) => this.props[filter.name]).map((filter) => {
      const value = this.props[filter.name];
      const normalizedValue = value.includes(filter.unit) ? value : `${value}${filter.unit}`;
      return `${filter.name}(${normalizedValue})`;
    }).join(' ');

    return {
      filter: cssFilters,
      WebkitFilter: cssFilters,
      OFilter: cssFilters,
      MozFilter: cssFilters,
      msFilter: cssFilters
    };
  }
}

