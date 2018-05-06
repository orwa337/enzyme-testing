import React from 'react';
import PropTypes from 'prop-types';

const ProductList = props => {
    return (
        <ul>
        {props.products.map( product => {
            return(
            <li key={product.id}>
            {product.name} ({product.brand})
            </li>
            )
        })}
        </ul>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;