import React from 'react';
import './App.css';
// import './Speakers.css';


const speakers = () => {
  const speakers = [
    {name:'Gaming soundbars', image: './assets/Gaming soundbars.jpeg'},
    {name:'Surround Sound Speakers', image: ''},
    {name:'Wireless gaming speakers', image:''},
    {name:'Subwoofer speakers', image:''},
    {name:'Soundstage speakers', image:''},

  ];

  return (
    <div className="App">
      <h1>Our Top 7 speakers</h1>
      <div className="product-list">
        {speakers.map((keyboard, index) => (
          <div key={index} className="product-card">
            <img src={speakers.image} alt={speakers.name} />
            <h2>{speakers.name}</h2>
            <p>{speakers.price}</p>
          </div>
        ))}
      </div>
      </div>
    )

}
export default speakers;

