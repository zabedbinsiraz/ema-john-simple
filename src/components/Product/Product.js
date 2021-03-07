import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
   
    const { name, img, seller, stock, price} = props.product;
    

    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{props.product.name}</h4>
               
                <p><small>By : {seller}</small></p>
                <br/>
                <h4>${price}</h4>
                <p><small>Only {stock} in stock-Order soon</small></p>
                <button className='cart-btn' onClick={ () => props.handleAddProduct(props.product)}
                >
               <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};

export default Product;