import { useState } from 'react'
import './App.css'
import logo from './assets/TradingCardShopLogo.png';
import Navbar from './navbar';
import './navbar.css'
import ProductType from './productType';
import './productType.css'
import ProductData from './productData';
import ProductCard from "./productCard";

function App() {
  //Establishing Categories of Pokemon Cards, Magic the Gathering, and Baseball Cards
  const categories = ['Pokemon', 'Magic the Gathering', 'Baseball'];
  
  //Establishes Product Types: Box, Booster, Single
  const productType = ['Box', 'Booster', 'Single'];

  //Establishes a state that will hold the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    console.log(`Product Type Selected: ${productType}`);
  };

  //Product Selection Handling
  const productSelection = (product) => {
    setSelectedProduct(product);
    console.log(`Product Selected: ${product}`); 
  };

  const selectedCategory2 = selectedCategory ? selectedCategory.toLowerCase() : null;

  //Products selection handling
  const products = selectedCategory2 && selectedProductType
   ? ProductData[selectedCategory2]?.[selectedProductType.toLowerCase()] || []
   : [];

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
      
      {/* Selected Product */}
      <div className='productContainer'>
        {selectedProduct && <h3>{selectedProduct}</h3>}

        {/* Display Product Cards only when a category and product type are selected */}
        {selectedProduct && (
          <ProductCard
            product={selectedProduct}
            onProductTypeSelect={productSelection}
            />
        )}

        {/* Show products based on the selected category and product type */}
        {products.length > 0 && products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductTypeSelect={productSelection}
          />
        ))}
      </div>
      
    </>
  );
};

export default App
