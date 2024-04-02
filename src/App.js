import React, { useState } from 'react';
import './App.scss';
import { products, categories } from './helper/data';
import Header from "./components/Header/Header";
import ProductList from './components/Products/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Header categories={categories} onSelectCategory={setSelectedCategory} onSearch={handleSearch} />
      <ProductList products={products} selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
