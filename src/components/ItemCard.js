// itemcard.js

import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ item, incrementQuantity, decrementQuantity, addCart }) => {
  const roundedRating = Math.floor(item.rating.rate);

  return (
    <>
      <div key={item.id} className="item-card">
        <div className="image-container">
          <img src={item.image} alt="itemimage" className="item-image" />
        </div>
        <h5 className="item-title">{item.title}</h5>
        <div className="quantity-container">
          <button className="quantity-button" onClick={decrementQuantity}>
            -1
          </button>
          <div className="quantity-value">{item.quantity}</div>
          <button className="quantity-button" onClick={incrementQuantity}>
            +1
          </button>
        </div>
        <div className="rating-container">
          <div className="rating-square">
            <h5 className="rating-rate">{item.rating.rate}</h5>
          <div className="rating-stars ">
            {Array.from({ length: roundedRating }, (_, index) => (
              <span key={index} className="star filled">&#9733;</span>
            ))}
          </div>
          </div>
          <h6 className="rating-count">({item.rating.count})</h6>
        </div>
        <h5 className="item-price">₹{item.price}</h5>
        <button className="item-remove-button" onClick={addCart}>
          add cart
        </button>
      </div>
    </>
  );
};

export default ItemCard;
