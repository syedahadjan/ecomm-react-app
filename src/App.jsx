import React, { useState } from 'react';
import SearchBar from './components/SearhBar';
import ProductList from './components/ProductList';
import { products } from './services/product'; // Import the products data

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Filter products based on the search term, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearchTerm && matchesCategory && matchesPrice;
  });

  return (
    <div className="app">
      <h1>E-commerce Products</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="filters">
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
        <span>Up to ${priceRange[1]}</span>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;