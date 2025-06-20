import logo from './assets/memoflip-logo.png';
import { useState, useEffect } from 'react';
import StartMenu from './components/StartMenu';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [numPairs, setNumPairs] = useState(4);
  const [theme, setTheme] = useState('animals');
  const [startTime, setStartTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [moves, setMoves] = useState(0);
  const [misses, setMisses] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState({ easy: 0, medium: 0, hard: 0 });

  const handleStart = (pairs) => {
    setNumPairs(pairs);
    setGameStarted(true);
    setStartTime(Date.now());
    setGameOver(false);
    setMoves(0);
    setMisses(0);
    setAccuracy(0);

    const difficulty = pairs === 4 ? 'easy' : pairs === 6 ? 'medium' : 'hard';
    setRoundsPlayed(prev => ({ ...prev, [difficulty]: prev[difficulty] + 1 }));
  };

  const handleEnd = () => {
    const endTime = Date.now();
    setElapsedTime(((endTime - startTime) / 1000).toFixed(2));
    setGameOver(true);
  };

  const restart = () => {
    setGameStarted(false);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <>
          <img src={logo} alt="MemoFlip Logo" className="top-left-logo" />
          <StartMenu onStart={handleStart} />
        </>
      ) : (
        <GameBoard
          numPairs={numPairs}
          onEnd={handleEnd}
          onRestart={restart}
          theme={theme}
          gameOver={gameOver}
          elapsedTime={elapsedTime}
          moves={moves}
          setMoves={setMoves}
          misses={misses}
          setMisses={setMisses}
          accuracy={accuracy}
          setAccuracy={setAccuracy}
        />
      )}
    </div>
  );
}

export default App;
