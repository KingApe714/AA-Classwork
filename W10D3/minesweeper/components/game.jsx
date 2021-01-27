import * as Minesweeper from "./../frontend/minesweeper"
import React from 'react'
import Board from './board'

const BOARDSIZE = 9;
const NUMBOMBS = Math.trunc(BOARDSIZE**2/3);

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                    board: new Minesweeper.Board(BOARDSIZE, NUMBOMBS),
                 };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <>
      something else
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </>
    )
  }
}

export default Game