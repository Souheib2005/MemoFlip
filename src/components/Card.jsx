function Card({ image, flipped, onClick }) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="back">❓</div>
      <img src={`/animal-icons/${image}`} alt="card" />
    </div>
  );
}

export default Card;
