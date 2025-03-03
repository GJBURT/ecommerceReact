import { useState } from 'react'
import './App.css'
import logo from './assets/TradingCardShopLogo.png';
import Navbar from './navbar';
import './navbar.css'
import ProductType from './productType';
import './productType.css'

function App() {
  //Establishing Categories of Pokemon Cards, Magic the Gathering, and Baseball Cards
  const categories = ['Pokemon', 'Magic the Gathering', 'Baseball'];
  //Establishes Product Types: Box, Booster, Single
  const productType = ['Box', 'Booster', 'Single'];

  //Establishes a state that will hold the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);

  //Category Selection handling
  const categorySelection = (category) => {
    setSelectedCategory(category);
    console.log(`Category Selected: ${category}`);
    //Reset the Product Type when a new category is selected
    setSelectedProductType(null);
  };

  //Product Type Selection Handling
  const productTypeSelection = (productType) => {
    setSelectedProductType(productType);
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
        {selectedCategory && <h2>{selectedCategory}</h2>}
        
        {/* Section will only show when a category has been selected */}
        {selectedCategory && (
          <ProductType
            productTypes={productType}
            onProductTypeSelect={productTypeSelection}
            />
        )}
      </div>
      
    </>
  );
};

export default App
