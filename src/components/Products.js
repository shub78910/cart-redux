import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import productList from "../productList";
import Product from "./Product";
import { useSelector } from "react-redux";

function Products() {
    //for showing cart length.
    const cartItems = useSelector((state) => state.productReducer);
    let cartLength = 0;

    cartItems.map((item) => {
        cartLength = cartLength + Number(item.count);
    });

    return (
        <div className="products">
            <div className="products_header">
                <div>
                    <h1 className="h1">Products:</h1>
                </div>
            </div>

            <div className="products_wrapper">
                {productList.map((item) => (
                    <Product key={item.price} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Products;
