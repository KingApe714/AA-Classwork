import Minesweeper from "./../frontend/minesweeper"
import React from 'react'

const BOARDSIZE = 9;
const NUMBOMBS = Math.trunc(BOARDSIZE**2/2);

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                    board: new Minesweeper.Board(BOARDSIZE, NUMBOMBS),
                 };
    
  }
}