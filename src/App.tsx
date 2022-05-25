import React, {useEffect, useState} from 'react';
import './App.css';
import CBoard from './components/CBoard';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }


  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
      <div className="head">
        <h2 className="head__title">Ход: {currentPlayer?.color === Colors.WHITE ? 'White' : 'Black'}</h2>
        <div className="head__timer">
          <Timer 
            restart={restart}
            currentPlayer={currentPlayer}
          />
        </div>
      </div>
      <div className="game">
        <LostFigures 
          title="Черные"
          figures={board.lostBlackFigures}
        />
        <CBoard 
          board={board} 
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <LostFigures 
          title="Белые"
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
