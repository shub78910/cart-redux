import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import productList from '../productList';
import Product from './Product';

function Products() {
    return (
        <div className="products">
            <h1>Products:</h1>
            <div className="products_wrapper">
            {productList.map((item)=>(
                <Product key={item.price} item={item} />
            ))}
            </div>
            <Link to="cart">
                <button>Go to cart</button>
            </Link>
        </div>
    )
}

export default Products


//redux samajh agaya vaiii
