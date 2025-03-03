import { useState } from 'react'
import './App.css'
import logo from './assets/TradingCardShopLogo.png';
import Navbar from './navbar';
import './navbar.css'

function App() {
  //Establishing Categories of Pokemon Cards, Magic the Gathering, and Baseball Cards
  const categories = ['Pokemon', 'Magic the Gathering', 'Baseball'];

  //Establishes a state that will hold the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Category Selection handling
  const categorySelection = (category) => {
    setSelectedCategory(category);
    console.log(`Category Selected: ${category}`);
  };


  return (
    <>
      {/* Trading Card Shop Logo Image */}
      <div>
        <img src={logo} className="logo" alt="Trading Card Shop logo" />
      </div>

      {/* Header for the app */}
      <h1>Trading Card Shop</h1>
      
      {/* Navbar that allows user to select a category of cards: Pokemon, Magic the Gathering, Baseball */}
      <Navbar categories={categories} onCategorySelect={categorySelection} />

      {/* Selected Category */}
      <div>
        {selectedCategory ? (
          <h2>{selectedCategory}</h2>
        ) : null}
      </div>

    </>
  );
};

export default App
