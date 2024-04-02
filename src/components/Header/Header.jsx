// Header.js
import React from 'react';
import "./Header.scss";

const Header = ({ categories, setSelectCategory, handleSearch }) => {
    return(
        <header>
            <h1>Product List</h1>
            <ul>
                <button className='notVisible' onClick={() => setSelectCategory("")}>All</button>
                {categories.map(category => (
                    <button key={category} onClick={() => setSelectCategory(category)}>
                        {category.toUpperCase()}
                    </button>
                ))}
            </ul>
            <input type="search" placeholder="Search Product..." onChange={handleSearch}/>
        </header>
    )
}

export default Header;

