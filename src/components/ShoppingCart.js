import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = (items) => {
  const location = useLocation();
  const cartitem = location.state.cartitem;

  const [cart, setcart] = useState(cartitem);
  const incrementQuantity = (item) => {
    setcart(
      cart.map((cartitem) =>
        item.id === cartitem.id
          ? { ...item, quantity: item.quantity + 1 }
          : cartitem
      )
    );
    // setcart(cart.map(item.id===cart.id? { ...item, quantity: item.quantity + 1 } : cart ))
  };

  const decrementQuantity = (item, id) => {
    if (item.quantity > 1) {
      // setcart((prev) => [
      //   ...prev.slice(0, id ),
      //   { ...item, quantity: item.quantity - 1 },
      //   ...prev.slice(id),
      // ]);
      setcart(
        cart.map((cartitem) =>
          item.id === cartitem.id
            ? { ...item, quantity: item.quantity - 1 }
            : cartitem
        )
      );
    }
  };
  const removeFromCart = (id) => {
    // debugger
    cartitem.splice(id, 1);
    // const cart1 = [...cartitem]
    setcart([...cartitem]);
  };

  return (
    <>
      <Navbar cart={cart}/>
      <div className="container">
        {cart && cart.map((item, id) => (
          <div key={id} className="item-card">
            <div className="image-container">
              <img src={item.image} alt="itemimage" className="item-image" />
            </div>
            <h5 className="item-title">{item.title}</h5>
            <div className="quantity-container">
              <button
                className="quantity-button"
                onClick={() => decrementQuantity(item, id)}
              >
                -1
              </button>
              <div className="quantity-value">{item.quantity}</div>
              <button
                className="quantity-button"
                onClick={() => incrementQuantity(item, id)}
              >
                +1
              </button>
            </div>
            <div className="rating-container">
              <div className="rating-square">
                <h6 className="rating-rate">{item.rating.rate}</h6>
              </div>
              <div className="rating-stars"></div>
              <h6 className="rating-count">({item.rating.count})</h6>
            </div>
            <h5 className="item-price">₹{item.price}</h5>
            <button
              className="item-remove-button"
              onClick={() => removeFromCart(id)}
            >
              remove from cart
            </button> 
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
