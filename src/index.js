import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 //------------------------------------------------------------------ 
//SQUARE COMPONENT
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
      return (
        <button className="square"
        onClick={() => this.setState({value: 'X'})}
        >
        {this.state.value}
        </button>
      );
    }
  }
 //------------------------------------------------------------------ 
//BOARD COMPONENT
  class Board extends React.Component {

    //THIS SETS THE INITAL STATE OF THE BOARD
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
    
    //FROM SQUARE COMPONENT
    renderSquare(i) {
      return <Square value={i} />;
    }
    
    //RENDERS NEXT PLAYER
    render() {
      const status = 'Next player: X';
    
    //THIS IS THE BOARD VIEW AND FILLED FROM THE STATUS VARIABLE AND SQUARE COMPONENT
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  //------------------------------------------------------------------
  //GAME COMPONENT THAT USES THE BOARD COMPONENT
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  //------------------------------------------------------------------ 
  // RENDERS THE FINAL COMPONENT FROM GAME TO THE INDEX.HTML FILE
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );