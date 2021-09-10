export const updateCartItems = (item)=>{
    return {
        type:"UPDATEITEM",
        payload:item.payload
    }
}

export const emptyCart = (item)=>{
    return {
        type:"EMPTYCART"
    }
}
