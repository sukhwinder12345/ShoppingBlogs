import React, { useState } from 'react';
import './App.css'; // Import CSS for styling
import FlowerList from './FlowerList';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, name: 'Rose', price: 10, image: 'sukhassign2.jpg' },
    { id: 2, name: 'Lily', price: 8, image: 'sukhAssign1.jpg' },
    { id: 3, name: 'Tulip', price: 6, image: 'sukhAssign3.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (flower) => {
    setCart([...cart, flower]);
  };

  return (
    <div className="app">
      <h1>Shopping Blog of Flowers</h1>
      <div className="content">
        <FlowerList flowers={flowers} addToCart={addToCart} />
        <ShoppingCart cart={cart} />
      </div>
    </div>
  );
};

export default App;
