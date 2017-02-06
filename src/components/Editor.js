import React, {Component} from 'react';
import Node from './Node';

export default class Editor extends Component {

  render() {
    let nodes = this.props.nodes;
    let selectedNode = this.props.selectedNode;
    let moving = this.props.moving;

    return (
      <div className="editor">
        {Object.keys(nodes).map(id => {
          return (<Node key={nodes[id].id} {...nodes[id]} selectedNode={selectedNode} mouseDownHandler={this.props.mouseDownHandler}/>)
        })}
        <svg>
          {Object.keys(nodes).map(id => {
            let currentNode = nodes[id];
            return currentNode.out.map(nodeId => {
              let nextNode = nodes[nodeId];
              let pathClassName = "";
              if (moving) {
                let movingNode = nodes[selectedNode.id];

                
              }
              return <path className={pathClassName} onClick={this.props.removePathHandler.bind(this, currentNode.id, nextNode.id)} d={"M" + (currentNode.position.x + 150) + "," + (currentNode.position.y + 15) + " C" + (currentNode.position.x + 200) + "," + (currentNode.position.y + 15) + " " + (nextNode.position.x - 50) + "," + (nextNode.position.y + 15) + " " + (nextNode.position.x) + "," + (nextNode.position.y + 15)}/>
            })
          })}
        </svg>
      </div>
    )
  }
}
