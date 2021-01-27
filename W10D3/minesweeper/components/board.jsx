import React from 'react'
import Tile from './tile'

class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
      console.log(props)
    }
    render() {
        console.log(this.props)
        const grid = this.props.board.grid.map((row, rowIdx) => {
            return <div className="row">{row}</div>
        });
      return (
        <div>
            {grid}
        </div>
      )
    }
  }

  export default Board