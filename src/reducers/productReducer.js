let initialState = [];

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case "UPDATEITEM":
            let newCart = [...state]
            let flag = false
            newCart.map((item)=>{
                if(item.id === action.payload.id){
                    item.count = action.payload.count
                    flag=true
                }
            })
            
            //to check if its already in the cart and therefore increase the count.
            if(flag){
                return [...newCart]
            }

            //return a new array with a new product.
            else if( !action.payload.count==0 ){
                return [...state, action.payload]
            }

        case "EMPTYCART":
            return []    
        default:
            return state   
    }
}

export default productReducer;
