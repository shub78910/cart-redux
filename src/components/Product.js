import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../actions";

import "./product.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ item }) {
    const dispatch = useDispatch();

    //sending the payload to the reducer through actions.
    const addToCart = () => {
        toast.success(`${item.name} added to cart!`, {
            position: "top-center",
            autoClose: 2000,
        });

        dispatch(
            addItemToCart({
                type: "ADD_ITEM",
                payload: {
                    name: item.name,
                    price: item.price,
                    id: item.id,
                    count: 1,
                },
            })
        );
    };

    return (
        <>
            <div className="productWrapper">
                <ToastContainer />

                <div className="name_price">
                    <div>
                        <h2>{item.name}</h2>
                    </div>

                    <div>
                        <h4>Rs. {item.price}</h4>
                    </div>
                </div>

                <div>
                    <button className="button" onClick={addToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default Product;
