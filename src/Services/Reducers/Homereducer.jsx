import { addToCart } from "../Actions/Homeaction";

export const initialState = {
    itemData: [],
    loading: false,
    error: null
}

const cartItems = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":{
            let found = false;
            const updatedItems = [];
            {console.log(state);}
            state.itemData.forEach((item)=>
            {
                if(item.id == action.data.id)
                {
                    found = true;
                    updatedItems.push({
                        ...item,
                        count: item.count + 1
                    })
                }
                else
                {
                    updatedItems.push(item);
                }
            })
            if (!found) {
                updatedItems.push(action.data); // add new item if not found
            }
            return{
                ...state,
                itemData: updatedItems
            }
        }
        case "REMOVE_FROM_CART":{
            let found = false;
            let updatedItems = [];
            state.itemData.forEach((item)=>
            {
                if(item.id == action.data.id)
                {
                    found = true;
                    if(item.count > 1)
                    {
                        updatedItems.push({
                            ...item,
                            count: item.count - 1
                        })
                    }
                }
                else{
                    updatedItems.push(item);
                }
            })
            return {
                ...state,
                itemData: updatedItems
            };
        }
        default: {
            return initialState;
        }
    }
}

export default cartItems;