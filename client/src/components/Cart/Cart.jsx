import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, removeItem } from './../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from './../../util/makeRequest';

const Cart = () => {
    
    const products = useSelector(state=> state.cart.products);
    const total = useSelector(state=> state.cart.total);
    
    const dispatch = useDispatch();
    
    const handleResetCart = () => {
        dispatch(resetCart());
    }

    const stripePromise = loadStripe('pk_test_51O5XCYAHeOImJ3VxhlITPAmLa5mTsNYo5AhcI2lbPkueKDwRU1cO2ZJk42GWzaX9i2SUywuUdet7PCVdHfsb9gxQ00BCn82pMM');
    
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const response = await makeRequest.post('/orders', {
                products
            });
            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className='cart'>

        <h1>Products in your cart</h1>

        {products?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={import.meta.env.VITE_APP_API_UPLOAD+item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' onClick={()=>{ dispatch(removeItem(item.id)) }}/>
            </div>
        ))}

        <div className="total">
            <span>SubTotal</span>
            <span>$ {total.toFixed(2)}</span>
        </div>

        <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>

        <span className='reset' onClick={handleResetCart}>Reset Cart</span>

    </div>
  )
}

export default Cart
