import React from "react";

//Box of Booster Packs contains 324pcs with 36 Booster Packs that have 9 cards per Booster Pack

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