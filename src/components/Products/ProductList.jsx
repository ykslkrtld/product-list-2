// ProductList.js
import React from 'react';
import "../Products/ProductCard.scss";
import ProductCard from "./ProductCard";

const ProductList = ({ products, selectedCategory, searchTerm }) => {
    const filteredProducts = products.filter(product => {
      return (selectedCategory === "all" || product.category === selectedCategory) && product.title.toLowerCase().includes(searchTerm);
    });

    return (
        <div className="container">
            {filteredProducts.map(({ id, title, price, image }) => (
                <ProductCard key={id} title={title} price={price} image={image} />
            ))}
        </div>
    )
}

export default ProductList;
