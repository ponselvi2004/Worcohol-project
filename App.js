import React from 'react';
import './App.css';

const App = () => {
  // List of 7 keyboards (you can modify with real product details)
  const keyboards = [
    { name: 'Mechanical Keyboard 1', price: 'Rs.4000', image:'/assets/mechanicalkeyboard.jpeg' },
    { name: 'Wireless Keyboard 2', price: 'Rs.7,717', image: '/assets/wirelesskeyboard.jpeg' },
    { name: 'RGB Keyboard 3', price: 'Rs.10,405', image: '/assets/RGB keyboard.jpeg' },
    { name: 'Gaming Keyboard 4', price: 'Rs.11,269', image: '/assets/Gamingkeyboard.jpeg' },
    { name: 'Silent Keyboard 5', price: 'Rs.6,501', image: '/assets/silent keyboard.jpeg' },
    { name: 'Ergonomic Keyboard 6', price: 'Rs.95', image: '/assets/Ergonomickeyboard.jpeg' },
    { name: 'Compact Keyboard 7', price: 'Rs.5,200', image: '/assets/compactkeyboard.jpeg' },
  ];

  return (
    <div className="App">
      <h1>Our Top 7 Keyboards</h1>
      <div className="product-list">
        {keyboards.map((keyboard, index) => (
          <div key={index} className="product-card">
            <img src={keyboard.image} alt={keyboard.name} />
            <h2>{keyboard.name}</h2>
            <p>{keyboard.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
