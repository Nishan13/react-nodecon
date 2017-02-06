import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Editor from './Editor';
import Utils from './Utils';

class App extends Component {

  constructor() {
    super();
    this.state = {
      props: {
        className: 'app'
      },
      layout: {
        header: {
          className: 'header'
        },
        footer: {
          className: 'footer'
        }
      },
      selectedNode: null,
      moving: false,
      store: {
        nodes: {
          1: {
            id: 1,
            name: 'Node 1',
            value: 'Node 1 Value ' + Utils.generateLipsum(Utils.getRandomNumber(5, 15)),
            position: {
              x: 20,
              y: 20
            },
            in: [],
            out: [2, 4]
          },
          2: {
            id: 2,
            name: 'Node 2',
            value: 'Node 2 Value' + Utils.generateLipsum(Utils.getRandomNumber(5, 15)),
            position: {
              x: 320,
              y: 220
            },
            in: [1],
            out: [3]
          },
          3: {
            id: 3,
            name: 'Node 3',
            value: 'Node 3 Value' + Utils.generateLipsum(Utils.getRandomNumber(5, 15)),
            position: {
              x: 520,
              y: 320
            },
            in: [2, 4, 5],
            out: []
          },
          4: {
            id: 4,
            name: 'Node 4',
            value: 'Node 4 Value' + Utils.generateLipsum(Utils.getRandomNumber(5, 15)),
            position: {
              x: 120,
              y: 320
            },
            in: [1],
            out: [3]
          },
          5: {
            id: 5,
            name: 'Node 5',
            value: 'Node 5 Value' + Utils.generateLipsum(Utils.getRandomNumber(5, 15)),
            position: {
              x: 220,
              y: 0
            },
            in: [],
            out: [3]
          }
        }
      }
    }
  }

  initMove(e) {
    if (this.state.selectedNode !== null) {
      let store = this.state.store;
      store.nodes[this.state.selectedNode.id].position = {
        x: e.nativeEvent.clientX - this.state.selectedNode.position.x,
        y: e.nativeEvent.clientY - this.state.selectedNode.position.y
      }

      this.setState({store: store});
    }
  }

  selectNode(id, e) {
    let node = this.state.store.nodes[id];
    this.setState({
      moving: true,
      selectedNode: {
        id: id,
        position: {
          x: e.nativeEvent.clientX - node.position.x,
          y: e.nativeEvent.clientY - node.position.y
        }
      }
    })
  }

  deselectNode() {
    this.setState({moving: false, selectedNode: null});
  }

  addNode() {
    let store = this.state.store;
    let keys = Object.keys(store.nodes);
    let id = Utils.generateIndex(3, false);
    let nid = keys[Utils.getRandomNumber(0, keys.length - 1)];
    let node = {
      id: id,
      name: 'Node ' + id,
      value: 'Node ' + id + ' value ' + Utils.generateLipsum(Utils.getRandomNumber(5, 10)),
      position: {
        x: Utils.getRandomNumber(0, 1000),
        y: Utils.getRandomNumber(0, 400)
      },
      in: [],
      out:[nid]
    }
    store.nodes[id] = node;
    store.nodes[nid].in.push(id);
    this.setState({store: store});

  }

  removePath(cid, nid) {
    let store = this.state.store;
    let currentNode = store.nodes[cid];
    let paths = currentNode.out;
    let index = paths.indexOf(nid);
    currentNode.out = [...paths.slice(0, index), ...paths.slice(index + 1)];
    this.setState({store: store});
  }

  render() {
    return (
      <div className={this.state.props.className} onMouseUp={this.deselectNode.bind(this)} onMouseMove={this.initMove.bind(this)}>
        <Header layout={this.state.layout.header} addNodeHandler={this.addNode.bind(this)}/>
        <Editor moving={this.state.moving} selectedNode={this.state.selectedNode} nodes={this.state.store.nodes} mouseDownHandler={this.selectNode.bind(this)} removePathHandler={this.removePath.bind(this)}/> {/* <Footer layout={this.state.layout.footer}/> */}
      </div>
    )
  }
}

export default App;
