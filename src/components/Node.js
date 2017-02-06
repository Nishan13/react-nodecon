import React, {Component} from 'react';

export default class Node extends Component {

  render() {
    let nodeClass = "node";
    let selectedNode = this.props.selectedNode;
    if (selectedNode !== null) {
      if (this.props.in.indexOf(selectedNode.id) === -1 && this.props.out.indexOf(selectedNode.id) === -1) {
        nodeClass = "node";
        if(this.props.id === selectedNode.id) {
          nodeClass = "node connected-no-transition";
        }
      } else {
        nodeClass = "node connected";
      }
    }
    return (
      <div className={nodeClass} style={{
        top: this.props.position.y + 'px',
        left: this.props.position.x + 'px'
      }}>
        <p className="name" onMouseDown={this.props.mouseDownHandler.bind(this, this.props.id)}>{this.props.name}</p>
        <div className="value">{this.props.value}</div>
      </div>
    )
  }
}
