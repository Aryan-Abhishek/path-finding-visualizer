import React, {Component} from 'react';
import './Node.css';

class Node extends Component {
  render() {
    const {row, col, isStart, isFinish, isWall} = this.props;

    // check for class condition
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}></div>
    );
  }
}

export default Node;

// https://www.tutorialspoint.com/Depth-first-search-traversal-in-Javascript
