import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    let {className} = this.props.layout;
    return (
      <footer className={className}>
        Footer
      </footer>
    )
  }
}
