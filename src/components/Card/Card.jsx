import "./Card.css";

function Card({ name, price, image, onClick }) {
  return (
    <div onClick={onClick} className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default Card;
