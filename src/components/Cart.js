import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Subtotal from "./Subtotal";

import CartItem from "./CartItem";
import { emptyCart } from "../actions";

import checkWhichproduct from "../discountCalculator";
import "./cart.css";
import "./product.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
    const dispatch = useDispatch();

    //to retrieve the cart items from the store
    const cartItems = useSelector((state) => state.productReducer);

    //to calculate and maintain the subtotal according to offers of the particular products.
    const [itemSubtotal, setItemSubtotal] = useState({});

    //calculate savings per item.
    const [savings, setSavings] = useState({});

    //empty the whole cart.
    const emptyFullCart = () => {
        toast.success(`Cart emptied!`, {
            position: "top-center",
            autoClose: 2000,
        });

        dispatch(emptyCart());
        setItemSubtotal({});
        setSavings({});
    };

    return (
        <div className="cart">
            <ToastContainer />

            <h1 className="h1">Basket: </h1>
            <div>
                <div className="cart_div">
                    <button className="button" onClick={emptyFullCart}>
                        Empty Cart
                    </button>
                </div>

                <div className="cartItems">
                    {cartItems.map((item) => {
                        return (
                            <CartItem
                                item={item}
                                key={item.id}
                                itemSubtotal={itemSubtotal}
                                setItemSubtotal={setItemSubtotal}
                                checkWhichproduct={checkWhichproduct}
                                savings={savings}
                                setSavings={setSavings}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="subtotal_wrapper">
                <Subtotal itemSubtotal={itemSubtotal} savings={savings} />
            </div>
        </div>
    );
}

export default Cart;
