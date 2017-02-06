import React, {Component} from 'react';

export default class Header extends Component {

  render() {
    let {className} = this.props.layout;
    return (
      <header className={className}>
        <button onClick={this.props.addNodeHandler.bind(this)}>Add Node</button>
      </header>
    )
  }
}
