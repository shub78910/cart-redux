export const addItem = (item)=>{
    return {
        type:"ADDITEM",
        payload:item
    }
}

export const incrementProductCount = (item)=>{
    return {
        type:"INCREMENTPRODUCTCOUNT",
        payload:item
    }
}

export const decrementProductCount = (item)=>{
    return {
        type:"DECREMENTPRODUCTCOUNT",
        payload:item
    }
}



