let initialState = [];

const productReducer = (state = initialState, action) => {
    let newCountObj
    switch (action.type) {
        case "ADDITEM":
            return [...state, action.payload]
        case "INCREMENTPRODUCTCOUNT":
            newCountObj = [...state]
            newCountObj.map((item) => {
                if (item.payload.name == action.payload.name) {
                    item.payload.count = item.payload.count + 1
                }
            })

            if( !newCountObj.includes(newCountObj[action.payload.id-1]) ){
                newCountObj.push(newCountObj[action.payload.id-1])
            } 

        return [ ...newCountObj ] 

        case "DECREMENTPRODUCTCOUNT":
            newCountObj = [...state]
            newCountObj.map((item) => {
                if (item.payload.name == action.payload.name) {
                    if(! item.payload.count==0){
                        item.payload.count = item.payload.count - 1
                    }    
                }
            })

            if( !newCountObj.includes(newCountObj[action.payload.id-1]) ){
                newCountObj.push(newCountObj[action.payload.id-1])
            } 

        return [ ...newCountObj ]
        default:
            return state
    }
}
//build logic to inc.dec qty of products.
//then make total of products
//then add the discounts jazz

export default productReducer;