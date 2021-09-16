export const addItemToCart = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item.payload,
    };
};

export const removeItem = (item) => {
    return {
        type: "REMOVE_ITEM",
        payload: item.payload,
    };
};

export const emptyCart = (item) => {
    return {
        type: "EMPTYCART",
    };
};
