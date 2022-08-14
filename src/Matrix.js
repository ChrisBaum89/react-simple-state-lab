import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (values) => {
    return values.map(x => <Cell value={x}/>)
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}



Matrix.defaultProps = {
    values: new Array(10).fill(new Array(10).fill("#F00"))
  }
