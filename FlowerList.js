import React from 'react';
import './App.css'; // Import your CSS file

const FlowerList = ({ flowers, addToCart }) => {
  return (
    <div className="flower-list">
      <h2>Flowers Available:</h2>
      <div className="grid-container">
        {flowers.map((flower) => (
          <div key={flower.id} className="flower-item">
            <img
              src={require(`./assets/${flower.image}`)}
              alt={flower.name}
              className="image-container" // Apply CSS class
            />
            <div className="flower-info">
              <p>{flower.name}</p>
              <p>${flower.price}</p>
              <button onClick={() => addToCart(flower)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerList;
