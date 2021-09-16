import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import productList from "../productList";
import "./cart.css";
import { removeItem, addItemToCart } from "../actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartItem({
    item,
    itemSubtotal,
    checkWhichproduct,
    savings,
    setItemSubtotal,
    setSavings,
}) {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.productReducer);

    let itemNameInCart = [];
    cartItems.map((item) => {
        if (!itemNameInCart.includes(item.name)) {
            itemNameInCart.push(item.name);
        }
    });

    let itemsNotInCart = [];

    productList.map((item) => {
        if (!itemNameInCart.includes(item.name)) {
            itemsNotInCart.push(item);
        }
    });

    //temporary state to add in the dependancy array.
    const [temp, setTemp] = useState(false);

    //to rerun the function of calculating the subtotal.
    useEffect(() => {
        // console.log(cartItems);
        // console.log(productList);

        cartItems.map((item) => {
            checkWhichproduct(
                item,
                setItemSubtotal,
                isSoupInCart,
                soupCount,
                setSavings
            );
        });

        itemsNotInCart.map((item) => {
            checkWhichproduct(
                item,
                setItemSubtotal,
                isSoupInCart,
                soupCount,
                setSavings
            );
        });
    }, [temp, cartItems]);

    //what exactly happening is:
    //whenever i am removing a product completely from the cart, the cartItem array will not have the product
    //therefore it will not map for that prod and therefore will not run the checkDiscount function.
    //therefore what's happening is the itemSubtotal for that prod remains the same i.e price of 1 product.
    //
    //to solve that, i made another array of item not in cart and mapped through them so that i can run the function on them a well.

    const addProduct = () => {
        setTemp(!temp);
        dispatch(
            addItemToCart({
                type: "ADD_ITEM",
                payload: {
                    name: item.name,
                    price: item.price,
                    id: item.id,
                    itemSubtotal: itemSubtotal,
                    setItemSubtotal: setItemSubtotal,
                },
            })
        );
    };

    const removeProduct = () => {
        if (item.count == 1) {
            toast.success(`${item.name} removed from cart!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        setTemp(!temp);
        dispatch(
            removeItem({
                type: "REMOVE_ITEM",
                payload: {
                    name: item.name,
                    price: item.price,
                    id: item.id,
                    itemSubtotal: itemSubtotal,
                    setItemSubtotal: setItemSubtotal,
                },
            })
        );
    };

    //to check the soup availability and therefore apply offers.
    let isSoupInCart = false;
    let soupCount;
    cartItems.map((item) => {
        if (item.name == "soup") {
            isSoupInCart = true;
            soupCount = item.count;
        }
    });

    return (
        <div>
            <ToastContainer />

            <div className="cartItem">
                <div className="cartItemDiv">
                    <div>
                        <h2>{item.name}</h2>
                    </div>

                    <div className="itemQty">
                        <div>
                            <button className="inc_dec" onClick={removeProduct}>
                                -
                            </button>
                        </div>
                        <h4>{item.count}</h4>
                        <div>
                            <button className="inc_dec" onClick={addProduct}>
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="cartItemDiv">
                    <div>
                        <div>
                            Rs. {item.price} * {item.count} ={" "}
                            <span className="strike">
                                {item.price * item.count}
                            </span>{" "}
                            <span>{itemSubtotal[item.name]}</span>
                        </div>
                    </div>
                    <div className="save_per_item">
                        You saved: Rs. {savings[`${item.name}Saving`]}
                    </div>
                    {/* can implement a conditional rendering if the saving is 0. */}
                </div>
            </div>
        </div>
    );
}

export default CartItem;

//add backgorund color to both main comp in app
// few more styling in cart item.
