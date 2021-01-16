import React, {Component} from 'react';
import Node from '../node/Node';
import './PathVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

class PathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

  // Initialize the grid
  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  render() {
    const {grid, mouseIsPressed} = this.state;
    // second argument was just for testing destructuring, well working as expected
    // console.log(grid);
    // console.log('[Path.js] render...');

    return (
      <div>
        {/* @todo to add a button for visualizing the algo*/}

        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;

                  return (
                    <Node
                      Key={nodeIdx}
                      row={row}
                      col={col}
                      isStart={isStart}
                      isFinish={isFinish}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      // two way binding for walls toggling
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PathVisualizer;

// For 'key declaration refer
// https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
// https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript

// function to make grid consisting of divs of certain properties
const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
