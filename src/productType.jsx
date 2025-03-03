import React from "react";


const ProductType = ({ productTypes, onProductTypeSelect }) => {
    return (
        <div>
            <h3>Select a Product Type</h3>
            <ul>
                {productTypes.map((productType) => (
                    <li key={productType}>
                        <button onClick={() => onProductTypeSelect(productType)}>{productType}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductType;