function StartMenu({ onStart }) {
  return (
    <div className="start-menu">
      <div className="glass-panel">
        <h1 className="game-title">🎮 <span className="green">MemoFlip</span></h1>
        <p className="subtitle">Train your memory by flipping cards and finding matches!</p>

        <h2>Select a Difficulty</h2>
        <div className="difficulty-boxes">
          <div className="difficulty-card" onClick={() => onStart(4)}>
            <img src="/easy.png" alt="Beginner" />
            <button>Beginner (4 pairs)</button>
          </div>
          <div className="difficulty-card" onClick={() => onStart(6)}>
            <img src="/medium.jpg" alt="Intermediate" />
            <button>Intermediate (6 pairs)</button>
          </div>
          <div className="difficulty-card" onClick={() => onStart(8)}>
            <img src="/difficult.jpg" alt="Advanced" />
            <button>Advanced (8 pairs)</button>
          </div>
        </div>

        <p className="contact-info">
          Need help? Contact us at <a href="mailto:support@memoflip.com">support@memoflip.com</a>
        </p>
      </div>
    </div>
  );
}

export default StartMenu;
