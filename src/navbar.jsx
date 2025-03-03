import React from "react";


const Navbar = ({ categories, onCategorySelect }) => {
    return (
        <nav>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button onClick={() => onCategorySelect(category)}>{category}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;