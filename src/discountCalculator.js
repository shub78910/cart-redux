//checks the prod and calculates its subtotal accordingly.

const checkWhichproduct = (
    item,
    setItemSubtotal,
    isSoupInCart,
    soupCount,
    setSavings
) => {
    if (item.name == "cheese") {
        let cheeseSubtotal = item.price * Math.ceil(item.count / 2);
        let cheeseSaving = item.count * item.price - cheeseSubtotal;

        setItemSubtotal((prevState) => ({
            ...prevState,
            cheese: cheeseSubtotal,
        }));

        setSavings((prevState) => ({
            ...prevState,
            cheeseSaving: cheeseSaving,
        }));
    } else if (item.name == "butter") {
        let freeItems = Math.floor(item.count / 3);
        let butterSubtotal = item.count * item.price - freeItems * item.price;

        let butterSaving = item.count * item.price - butterSubtotal;

        setItemSubtotal((prevState) => ({
            ...prevState,
            butter: butterSubtotal,
        }));

        setSavings((prevState) => ({
            ...prevState,
            butterSaving: butterSaving,
        }));
    } else if (item.name == "bread") {
        let breadSubtotal;
        let breadSaving;
        if (!isSoupInCart) {
            breadSubtotal = item.count * item.price;
            breadSaving = 0;
        } else if (isSoupInCart) {
            if (soupCount >= Number(item.count)) {
                breadSubtotal = item.count * (item.price / 2);
                breadSaving = item.price * item.count - breadSubtotal;
            } else if (soupCount < Number(item.count)) {
                breadSubtotal =
                    (item.count - soupCount) * item.price +
                    soupCount * (item.price / 2);
                breadSaving = soupCount * (item.price / 2);
            }
        }

        setItemSubtotal((prevState) => ({
            ...prevState,
            bread: breadSubtotal,
        }));

        setSavings((prevState) => ({ ...prevState, breadSaving: breadSaving }));
    } else if (item.name == "milk") {
        let milkSubtotal = item.count * item.price;
        setItemSubtotal((prevState) => ({ ...prevState, milk: milkSubtotal }));
    } else if (item.name == "soup") {
        let soupSubtotal = item.count * item.price;
        setItemSubtotal((prevState) => ({ ...prevState, soup: soupSubtotal }));
    }
};

export default checkWhichproduct;
