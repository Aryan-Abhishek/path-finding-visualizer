import React, { Component } from "react";
import Node from "./Node/Node";
import "./PathVisualizer.css";

class PathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const gridPath = [];

    for (let i = 0; i < 15; i++) {
      const newArrRow = [];
      for (let j = 0; j < 30; j++) {
        newArrRow.push([]);
      }
      gridPath.push(newArrRow);
    }
    // Now as the loop is over and we have created our array of arrays, just set the state
    this.setState({ grid: gridPath });
    // console.log("h");  // Testing purpose
  }

  colorDivision = (event, rowIdx, colIdx) => {
    console.log(event.target);
    console.log(rowIdx, colIdx);
  };

  render() {
    const { grid } = this.state;
    // second argument was just for testing destructuring, well working as expected
    // console.log(grid);

    return (
      <div className="gridSize">
        {grid.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((col, colIdx) => {
                return (
                  <Node
                    key={colIdx}
                    click={(event) => this.colorDivision(event, rowIdx, colIdx)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default PathVisualizer;

// For 'key declaration refer
// https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
// https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript
