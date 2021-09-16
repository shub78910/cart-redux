let initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            let cartToAddItem = [...state];
            let flag = false;

            cartToAddItem.map((item) => {
                if (item.id === action.payload.id) {
                    item.count = Number(item.count) + 1;
                    flag = true;
                }
            });

            if (flag) {
                return [...cartToAddItem];
            } else {
                return [...state, action.payload];
            }

        case "REMOVE_ITEM":
            //removing the object with id same as the payload id.

            let cartToRemoveItem = [...state];

            cartToRemoveItem.map((item) => {
                if (item.id === action.payload.id) {
                    if (item.count == 1) {
                        let indexToDelete = state.findIndex(
                            (a) => a.id === action.payload.id
                        );

                        cartToRemoveItem = cartToRemoveItem.filter(
                            (item, index) => index !== indexToDelete
                        );
                    } else {
                        item.count = Number(item.count) - 1;
                    }
                }
            });

            return [...cartToRemoveItem];

        case "EMPTYCART":
            return [];

        default:
            return state;
    }
};

export default productReducer;
