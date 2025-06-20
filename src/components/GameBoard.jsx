import { useEffect, useState } from 'react';
import Card from './Card';

const images = [
  'lion.jpg', 'elephant.jpg', 'tiger.jpg', 'giraffe.jpg',
  'zebra.jpg', 'monkey.jpg', 'panda.jpg', 'fox.png'
];

function GameBoard({ numPairs, onEnd, onRestart, gameOver, elapsedTime, moves, setMoves, misses, setMisses, accuracy, setAccuracy }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const selected = images.slice(0, numPairs);
    const shuffled = [...selected, ...selected]
      .sort(() => 0.5 - Math.random())
      .map((img, index) => ({ id: index, img }));
    setCards(shuffled);
  }, [numPairs]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [a, b] = flipped;
      if (cards[a].img === cards[b].img) {
        setMatched(prev => [...prev, a, b]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
        setMisses(prev => prev + 1);
      }
    }
  }, [flipped]);

  useEffect(() => {
    const total = moves;
    const correct = matched.length / 2;
    if (total > 0) {
      setAccuracy(((correct / total) * 100).toFixed(1));
    }
  }, [moves, matched]);

  useEffect(() => {
    if (matched.length === numPairs * 2 && cards.length > 0) {
      onEnd();
    }
  }, [matched]);

return (
  <div className="game-wrapper">
    <div className="game-inner">
      <button className="back-button" onClick={onRestart}>🔙 Back to Menu</button>

      <div className={`grid grid-${numPairs}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.img}
            flipped={flipped.includes(index) || matched.includes(index)}
            onClick={() => {
              if (!flipped.includes(index) && !matched.includes(index) && flipped.length < 2) {
                setFlipped([...flipped, index]);
                setMoves(prev => prev + 1);
              }
            }}
          />
        ))}
      </div>

      {gameOver && (
        <div className="results">
          <h2>🏆 You Win!</h2>
          <p>Time: {elapsedTime} seconds</p>
          <p>Moves: {moves}</p>
          <p>Misses: {misses}</p>
          <p>Accuracy: {accuracy}%</p>
          <button onClick={onRestart}>Play Again</button>
        </div>
      )}
    </div>
  </div>
);

}

export default GameBoard;
