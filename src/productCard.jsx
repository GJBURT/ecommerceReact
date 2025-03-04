import React from "react";
import './productData.css';

function ProductCard({product}){
    return(
        <div className="productCard">
            <img src={product.image} alt={product.name} className="productImage" />
            <h3 className="productName">{product.name}</h3>
            <p className="productDescription">{product.description}</p>
            <p className="productPrice">${product.price.toFixed(2)}</p>
        </div>
    );
}

export default ProductCard;