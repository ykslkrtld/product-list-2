// Header.js
import React from 'react';
import "./Header.scss";

const Header = ({ categories, onSelectCategory, onSearch }) => {
    return(
        <header>
            <h1>Product List</h1>
            <ul>
                <button className='notVisible' onClick={() => onSelectCategory("all")}>All</button>
                {categories.map(category => (
                    <button key={category} onClick={() => onSelectCategory(category)}>
                        {category.toUpperCase()}
                    </button>
                ))}
            </ul>
            <input type="search" placeholder="Search Product..." onChange={onSearch}/>
        </header>
    )
}

export default Header;

