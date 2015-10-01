import React, { Component } from 'react';

export class ImgControl extends Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <input type="range" onChange={this.props.onChange} min={this.props.min} max={this.props.max} step={this.props.step}/>
        </div>
    )
  }
}
