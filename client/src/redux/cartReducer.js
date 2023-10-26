import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart : (state, action)=>{
            const item = state.products.find(item=>item.id === action.payload.id);
            if(item){

                // update product state
                item.quantity+=action.payload.quantity;
                
                // update total state
                let total_ = state.total - item.amount;
                state.total = total_ + ( item.quantity * item.price )

                item.amount = item.quantity * item.price;

            }else{

                // update product state
                state.products.push(action.payload);

                // update total state
                state.total += action.payload.amount;

            }
        },
        removeItem: (state, action)=>{
            let total = 0 ;
            state.products = state.products.filter( (item) => {
                if(item.id !== action.payload){
                    total += (item.quantity * item.price);
                    return item;
                }else{
                    
                }
            });
            state.total = total;
        },
        resetCart: (state)=>{
            return initialState;
        }
    }
});

export const {addToCart, removeItem, resetCart} = cartSlice.actions;

export default cartSlice;