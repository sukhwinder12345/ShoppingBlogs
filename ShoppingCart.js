import React from 'react';
import './ShoppingCart.css'; // Import your CSS file for ShoppingCart styles

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              src={require(`./assets/${item.image}`)}
              
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
