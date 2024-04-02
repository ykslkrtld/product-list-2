import { useState } from 'react';
import "../Products/ProductCard.scss";

const ProductCard = ({ id, title, price, image }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavourite = () => {
    setIsFavorited(!isFavorited);
  }

  return (
    <div className="card-container">
      <div className="price">
        <p>{price} $</p>
        <span onClick={handleFavourite}>
          <i className={isFavorited ? "fa-solid fa-heart red" : "fa-solid fa-heart"}></i>
        </span>
      </div>
      <div className="image">
        <img src={image} alt={id}/>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
